import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Divider from "../divider/Divider";

function Menu() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <div className="menu content--marginleft">
                <nav className="menu__nav">
                    <div className="menu__mobile-icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>
                    <ul className={`menu__list ${showMenu ? "show" : ""}`}>
                        <li className="menu__list__item">
                            <a href="https://adsomos.com/" className="menu__item__link">
                                Home
                            </a>
                        </li>
                        <Divider size={2} width="1px" horizontal={false} color={"white"} />
                        <li className="menu__list__item">
                            <a href="https://adsomos.com/" className="menu__item__link">
                                About
                            </a>
                        </li>
                        <Divider size={2} width="1px" horizontal={false} color={"white"} />
                        <li className="menu__list__item">
                            <a href="https://adsomos.com/" className="menu__item__link">
                                Shop
                            </a>
                        </li>
                        <Divider size={2} width="1px" horizontal={false} color={"white"} />
                        <li className="menu__list__item">
                            <a href="https://adsomos.com/" className="menu__item__link">
                                Help
                            </a>
                        </li>
                        {showMenu &&
                            <>
                                <li className="menu__list__item">
                                    <a href="https://adsomos.com/" className="menu__item__link">
                                        Your Cart
                                    </a>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Menu;

