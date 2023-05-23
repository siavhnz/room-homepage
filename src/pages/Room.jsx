import Layout from "../components/layout";
import Slider from "../components/slider";

const Room = () => {

    return <Layout>
        <Slider />
        <div>
            <div>
                <img alt="a comfortable sofa" src="/images/image-about-dark.jpg" />
            </div>
            <div>
                <h1>
                    About our furniture
                </h1>
                <p>
                    Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream space.
                </p>
            </div>
            <div>
                <img alt="a nice chair" src="/images/image-about-light.jpg" />
            </div>
        </div>
    </Layout>

}

export default Room;