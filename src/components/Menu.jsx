
import { ReactComponent as Hambur } from "../assets/images/icon-hamburger.svg";
import { ReactComponent as Close } from "../assets/images/icon-close.svg";

const Menu = () => {

    return <div>
        <div>
            <button aria-label="open menu">
                <Hambur aria-hidden={true} focusable={false} />
            </button>
            <button aria-label="open menu">
                <Close aria-hidden={true} focusable={false} />
            </button>
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    </div>
}

export default Menu;