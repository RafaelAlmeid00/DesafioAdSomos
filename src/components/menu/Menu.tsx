import Divider from "../divider/Divider"

function Menu() {

    return (
        <>
            <div className="menu menu--marginleft">
                <nav className="menu__nav">
                    <ul className="menu__list">
                        <li className="menu__list__item"><a href="https://adsomos.com/" className="menu__item__link">Home</a></li>
                        <Divider size={2} width="1px" horizontal={false} color={'white'}/>
                        <li className="menu__list__item"><a href="https://adsomos.com/" className="menu__item__link">About</a></li>
                        <Divider size={2} width="1px" horizontal={false} color={'white'}/>
                        <li className="menu__list__item"><a href="https://adsomos.com/" className="menu__item__link">Shop</a></li>
                        <Divider size={2} width="1px" horizontal={false} color={'white'}/>
                        <li className="menu__list__item"><a href="https://adsomos.com/" className="menu__item__link">Help</a></li>
                    </ul>

                </nav>
            </div>
        </>
    )
}

export default Menu
