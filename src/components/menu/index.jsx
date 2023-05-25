
import { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { ReactComponent as Hambur } from "../../assets/images/icon-hamburger.svg";
import { ReactComponent as Close } from "../../assets/images/icon-close.svg";
import Backdrop from "../layout/Backdrop";
import styles from "./index.module.css";
import MobileMenu from "./MobileMenu";

const variants = {
    open: {
        clipPath: "circle(1000px at 2rem 3.5rem)",
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    },
    closed: {
        clipPath: "circle(0px at 2rem 3.5rem)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openMenuHandler = (e) => {
        setIsOpen(true);
    }

    const closeMenuHandler = (e) => {
        setIsOpen(false);
    }

    return <>

        {
            isOpen && createPortal(
                <Backdrop close={closeMenuHandler} />,
                document.getElementById("backdrop-root"))
        }

        <button className={styles.hambur} aria-label="open menu" onClick={openMenuHandler}>
            <Hambur aria-hidden={true} focusable={false} />
        </button>

        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}>
            <motion.div className={styles.menu} variants={variants}>
                <button aria-label="close menu">
                    <Close aria-hidden={true} focusable={false} onClick={closeMenuHandler} />
                </button>
                <MobileMenu />
            </motion.div>
        </motion.nav>

        <nav className={styles["desktop-menu"]}>
            <ul className={styles["menu-items"]}>
                <li>
                    <a href="#">
                        <span>home</span>
                        <div className={styles.underline}></div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>shop</span>
                        <div className={styles.underline}></div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>about</span>
                        <div className={styles.underline}></div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>contact</span>
                        <div className={styles.underline}></div>
                    </a>
                </li>
            </ul>
        </nav>
    </>
}

export default Menu;