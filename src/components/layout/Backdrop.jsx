
import styles from "./Backdrop.module.css";

const Backdrop = ({ close }) => {
    return <div className={styles.backdrop} onClick={close}></div>
}

export default Backdrop;