
import { useState } from "react";
import { createPortal } from "react-dom";
import { ReactComponent as Hambur } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/images/icon-close.svg";
import Backdrop from "../layout/Backdrop";
import styles from "./index.module.css";

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenuHandler = (e) => {
        setIsOpen(true);
    }

    const closeMenuHandler = (e) => {
        setIsOpen(false);
    }

    return <>
        <button className={styles.hambur} aria-label="open menu" onClick={openMenuHandler}>
            <Hambur aria-hidden={true} focusable={false} />
        </button>

        {
            isOpen && <>
                {
                    createPortal(
                        <Backdrop close={closeMenuHandler} />,
                        document.getElementById("backdrop-root"))
                }
                <nav className={styles.menu}>
                    <button aria-label="close menu">
                        <Close aria-hidden={true} focusable={false} onClick={closeMenuHandler} />
                    </button>
                    <ul className={styles["menu-items"]}>
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>
                    </ul>
                </nav>
            </>
        }

        <nav className={styles["desktop-menu"]}>
            <ul className={styles["menu-items"]}>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
            </ul>
        </nav>
    </>
}

export default Menu;