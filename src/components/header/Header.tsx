import Button from "../button/Button"
import Menu from "../menu/Menu"
import Search from "../search/Search"
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function Header() {

    return (
        <>
            <header className="header header--fixed primarycolor--background">
                <Search text={"Search..."} Icon={FaSearch} pd="search--header search--positionrelative" />
                <Menu />
                <div className="header__button"> 
                    <Button text="Your Cart" icon={FaCartShopping} width="10vw" height="5vh" link="https://adsomos.com/" />
                </div>
            </header>
        </>
    )
}

export default Header