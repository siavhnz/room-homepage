
import { motion } from "framer-motion";

const variants = {
    open: {
        x: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        x: -50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};


const MobileMenuItem = ({ title }) => {
    return <motion.li variants={variants}>
        {title}
    </motion.li>
}

export default MobileMenuItem;