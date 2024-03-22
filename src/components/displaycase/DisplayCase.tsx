import Product from "../product/Product"
import projector from "../../assets/projetor.png"
import speaker from "../../assets/som.png"
import alexa from "../../assets/shopping.png"
import headphones from "../../assets/fone.png"
import printer from "../../assets/impressora.png"

function DisplayCase() {

    return (
        <>
            <div className="products content--displayflex">
                <div className="products__principal content--displaycolumn">
                    <Product height={'inherit'} width={'inherit'} src={projector} alt={"Eletrônico"} name={"Projector"} value={"300"} />
                </div>
                <div className="products__others content--displayflex">
                    <div className="products__others__left content--displaycolumn">
                        <Product height={'30%'} width={'30%'} src={speaker} alt={"Eletrônico"} name={"Speaker"} value={"300"} />
                        <Product height={'30%'} width={'30%'} src={alexa} alt={"Eletrônico"} name={"Alexa"} value={"300"} />
                    </div>
                    <div className="products__others__right content--displaycolumn">
                        <Product height={'30%'} width={'30%'} src={headphones} alt={"Eletrônico"} name={"HeadPhones"} value={"300"} />
                        <Product height={'30%'} width={'30%'} src={printer} alt={"Eletrônico"} name={"Printer"} value={"300"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DisplayCase
