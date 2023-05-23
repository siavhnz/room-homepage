
import Menu from "../Menu";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const Header = () => {

    return <header>
        <div aria-label="logo">
            <Logo aria-hidden={true} focusable={false} />
        </div>
        <Menu />
    </header>


}

export default Header;