
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";
import { ReactComponent as Left } from "../../assets/images/icon-angle-left.svg";
import { ReactComponent as Right } from "../../assets/images/icon-angle-right.svg";
import { slides } from "../../store/slider";
import styles from "./index.module.css";

const Slider = () => {


    return <div className={styles.slider}>
        {
            slides.map((slide, index) => {
                return <div className={styles.slide} key={index}>
                    <div className={styles["image-container"]}>
                        <picture>
                            <source media="(max-width:599px)" srcset={slide.mobileImage}></source>
                            <source media="(min-width:600px)" srcset={slide.desktopImage}></source>
                            <img src={slide.mobileImage} alt={slide.title} />
                        </picture>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            {slide.title}
                        </h2>
                        <p className={styles.desc}>
                            {slide.description}
                        </p>
                        <a className={styles["call-to-action"]}>
                            <span>shop now</span>
                            <span>
                                <Arrow aria-hidden={true} focusable={false} />
                            </span>
                        </a>
                    </div>
                    <div className={styles.controls}>
                        <button aria-label="go to previous slide">
                            <Left aria-hidden={true} focusable={false} />
                        </button>
                        <button aria-label="go to next slide">
                            <Right aria-hidden={true} focusable={false} />
                        </button>
                    </div>
                </div>
            })
        }
    </div>
}

export default Slider;