
import { motion } from "framer-motion";
import { slides } from "../../store/slider";
import useSize from "../../hooks/useSize";
import { wrap } from "popmotion"

import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";
import styles from "./Slide.module.css";
import { useEffect, useRef } from "react";

const Slide = ({ page, onImageSizeChange }) => {


    // don't let page goes beyand of array data 
    const index = wrap(0, slides.length, page);

    /*
        get image size for control position
    */
    const image = useRef(null);
    const imageSize = useSize(image)

    useEffect(() => {
        if (imageSize && imageSize.height) {
            onImageSizeChange(imageSize);
        }
    }, [imageSize])

    // fade slide based
    const variants = {
        enter: {
            opacity: 0,
            visibility: "hidden"
        },
        center: {
            opacity: 1,
            visibility: "visible"
        },
        exit: {
            opacity: 0,
            visibility: "hidden"
        }
    };

    // properties needed for a slide
    const slideProps = {
        variants: variants,
        initial: "enter",
        animate: "center",
        exit: "exit",
        transition: {
            opacity: { duration: 0.8 },
        },
    }

    return <motion.div className={styles.slide} {...slideProps}>
        <div className={styles["image-container"]}>
            <picture>
                <source media="(max-width:599px)" srcSet={slides[index].mobileImage}></source>
                <source media="(min-width:600px)" srcSet={slides[index].desktopImage}></source>
                <img src={slides[index].mobileImage} alt={slides[index].title} ref={image} />
            </picture>
        </div>
        <div className={styles.content}>
            <h2 className={styles.title}>
                {slides[index].title}
            </h2>
            <p className={styles.desc}>
                {slides[index].description}
            </p>
            <a className={styles["call-to-action"]}>
                <span>shop now</span>
                <span>
                    <Arrow aria-hidden={true} focusable={false} />
                </span>
            </a>
        </div>
    </motion.div>
}

export default Slide;