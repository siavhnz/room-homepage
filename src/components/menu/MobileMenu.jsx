import MobileMenuItem from "./MobileMenuItem";
import { motion } from "framer-motion";

const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

import styles from "./MobileMenu.module.css";

const MobileMenu = () => {

    const items = ["home", "shop", "about", "contact"];

    return <motion.ul variants={variants} className={styles["menu-items"]}>

        {
            items.map((item, index) => {
                return <MobileMenuItem title={item} key={index} />
            })
        }

    </motion.ul>
}

export default MobileMenu;