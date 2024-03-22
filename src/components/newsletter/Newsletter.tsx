import Button from "../button/Button"
import Search from "../search/Search"
import Title from "../text/Title"
import Text from "../text/Text"

function Newsletter() {
    return (
        <>
            <div className="newsletter content--padding content--marginright">
                <div className="newsletter__text content-displaycolumn">
                    <Title text={"Newsletter"} />
                    <Text text={"Cadastre-se e receba novidades em primeira mão para aproveitar os produtos que estão em promoção!"} pd={"newsletter__text--margintop"} />
                </div>
                <div className="newsletter__subscribe">
                    <Search text={"Email Adress"} pd="search--newsletter content--border " />
                    <Button width={"15vw"} height={"5vh"} text={"Subscribe"} link={"https://adsomos.com/"} />
                </div>
            </div>
        </>
    )
}

export default Newsletter