import Button from "../button/Button"
import Menu from "../menu/Menu"
import Search from "../search/Search"
import { FaCartShopping } from "react-icons/fa6";

function Header() {

    return (
        <>
            <header className="header header--fixed primarycolor--background">
                <Search />
                <Menu />
                <Button text="Your Cart" icon={FaCartShopping} width="10vw" height="5vh" link="https://adsomos.com/"/>
            </header>
        </>
    )
}

export default Header