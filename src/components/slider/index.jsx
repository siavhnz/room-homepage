
import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Slide from "./Slide";
import { ReactComponent as Left } from "../../assets/images/icon-angle-left.svg";
import { ReactComponent as Right } from "../../assets/images/icon-angle-right.svg";
import styles from "./index.module.css";

//slideshow code: https://codesandbox.io/s/framer-motion-image-gallery-pqvx3

const Slider = () => {

    // handle pagination
    const [page, setPage] = useState(0);

    const paginate = (newDirection) => {
        setPage(page + newDirection);
    };

    // add keydown listener to the document for slide with arrow key
    useEffect(() => {
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        }
    });

    //Code for position control on bottom right of image
    const control = useRef(null);
    const [controlAtt, setControlAtt] = useState({ top: 0 });

    // paginate with arrow keys
    const keyDownHandler = (e) => {

        if (e.keyCode === 37) {
            paginate(-1);
        }
        if (e.keyCode === 39) {
            paginate(1);
        }
    }

    const handleControlPosition = (imageSize) => {
        setControlAtt({ top: imageSize.height - control.current.clientHeight })
    }

    return <div className={styles.slider}>
        <AnimatePresence initial={false}>
            <Slide page={page} key={page} onImageSizeChange={handleControlPosition} />
            <div ref={control} className={styles.controls} style={
                window.innerWidth < 1200 ? { position: "absolute", top: controlAtt.top } : {}
            }>
                <button aria-label="go to previous slide" onClick={() => paginate(-1)}>
                    <Left aria-hidden={true} focusable={false} />
                </button>
                <button aria-label="go to next slide" onClick={() => paginate(1)}>
                    <Right aria-hidden={true} focusable={false} />
                </button>
            </div>
        </AnimatePresence>
    </div>
}

export default Slider;