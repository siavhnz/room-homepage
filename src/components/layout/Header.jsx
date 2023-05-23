
import Menu from "../menu";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import styles from "./Header.module.css";

const Header = () => {
    return <header className={styles.header}>
        <Menu />
        <div aria-label="logo" className={styles.logo}>
            <Logo aria-hidden={true} focusable={false} />
        </div>
    </header>
}

export default Header;