import Divider from "../divider/Divider"
import Section from "../section/Section"
import Title from "../text/Title"
import Image from "../image/Image"
import Button from "../button/Button"
import Slider from "../slider/Slider"
import vacuum from "../../assets/Aspirador.png"
import iphone from "../../assets/Iphone.png"
import router from "../../assets/Roteador.png"
import projector from "../../assets/projetor.png"
import speaker from "../../assets/som.png"
import alexa from "../../assets/shopping.png"
import headphones from "../../assets/fone.png"
import printer from "../../assets/impressora.png"
import Newsletter from "../newsletter/Newsletter"
import DisplayCase from "../displaycase/DisplayCase"
import Text from "../text/Text"

function Body() {

    return (
        <>
            <Section height={"95vh"}>
                <Title text={"Find everything you need at TED Eletrônicos"} pd="content--padding content--displayflex" />
                <Divider horizontal size={2} height="1px" width={"25vw"} color={'#3667cc'} />
                <div className="banner content--padding">
                    <Image height={"12vh"} width={"12vw"} src={router} alt={"Eletrônicos"} />
                    <Image height={"12vh"} width={"12vw"} src={vacuum} alt={"Eletrônicos"} />
                    <Image height={"12vh"} width={"12vw"} src={iphone} alt={"Eletrônicos"} />
                </div>
                <Button text="Shop now" width="20vw" height="5vh" link={"https://adsomos.com/"} />
            </Section>
            <Divider horizontal size={3} height="1px" width={"100vw"} color={"#3667cc"} />
            <Section height={"70vh"} >
                <Title text={"Featured Products"} pd="content--padding content--displayflex" />
                <Slider images={[printer, speaker, router, headphones, alexa, vacuum, projector, iphone]} />
            </Section>
            <Section height={"25vh"} >
                <Newsletter />
            </Section>
            <Divider horizontal size={3} height="1px" width={"100vw"} color={"#3667cc"} />
            <Section height={"70vh"}>
                <DisplayCase />
            </Section>
            <Section height={"35vh"}>
                <Divider horizontal size={3} height="1px" width={"100vw"} color={"#3667cc"} />
                <div className="about content--displaycolumn">
                    <Title text={"About Our Store"} />
                    <Text text={"TED Electronics Store offers cutting-edge gadgets and state-of-the-art electronics. From smartphones to smart home devices, we provide top-quality products to enhance your digital lifestyle. Visit us today for the latest in technology and innovation!"} />
                </div>
            </Section>
        </>
    )
}

export default Body
