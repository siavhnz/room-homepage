
import { ReactComponent as Arrow } from "../../assets/images/icon-arrow.svg";
import { slides } from "../../store/slider";

const Slider = () => {


    return <div>
        {
            slides.map((slide, index) => {
                return <div key={index}>
                    <div>
                        <picture>
                            <source media="(max-width:649px)" srcset={slide.mobileImage}></source>
                            <source media="(min-width:650px)" srcset={slide.desktopImage}></source>
                            <img src={slide.mobileImage} alt={slide.title} />
                        </picture>
                    </div>
                    <div>
                        <h2>
                            {slide.title}
                        </h2>
                        <p>
                            {slide.description}
                        </p>
                        <a>
                            <span>shop now</span>
                            <span>
                                <Arrow aria-hidden={true} focusable={false} />
                            </span>
                        </a>
                    </div>
                </div>
            })
        }
    </div>
}

export default Slider;