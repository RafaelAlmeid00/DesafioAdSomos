import Image from "../image/Image"
import Text from "../text/Text";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface ProductProps {
    height: string;
    width: string;
    src: string;
    alt: string;
    name: string;
    value: string;
}

function Product({ height, width, src, alt, name, value }: ProductProps) {

    return (
        <>
            <Image height={height} width={width} src={src} alt={alt} border={"imagem--border"} />
            <div className="product content--displayflex">
                <div className="product__infos content--displaycolumn">
                    <h1 className="product__infos__name content--displayflex secondcolor--color">{name}</h1>
                    <Text text={`$${value}`} pd="product__infos__value content--displayflex product__infos__text--margin" />
                </div>
                <div className="product__rate">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <CiStar />
                    <CiStar />
                </div>
            </div>
        </>
    )
}

export default Product
