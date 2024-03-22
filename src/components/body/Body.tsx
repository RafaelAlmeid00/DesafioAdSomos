import Divider from "../divider/Divider"
import Section from "../section/Section"
import Title from "../text/Title"
import Image from "../image/Image"
import vacuum from "../../assets/Aspirador.png"
import iphone from "../../assets/Iphone.png"
import router from "../../assets/Roteador.png"
import Button from "../button/Button"

function Body() {

    return (
        <>
            <Section height={"95vh"}>
                <Title text={"Find everything you need at TED Eletrônicos"} />
                <Divider horizontal size={2} height="1px" width={"25vw"} color={'#041e50'} />
                <div className="banner">
                    <Image height={"15vh"} width={"15vw"} src={router} />
                    <Image height={"15vh"} width={"15vw"} src={vacuum} />
                    <Image height={"15vh"} width={"15vw"} src={iphone} />
                </div>
                <Button text="Shop now" width="20vw" height="5vh" link={"https://adsomos.com/"}/>
            </Section>
            <Section height={"70vh"} children={undefined}>

            </Section>
            <Section height={"25vh"} children={undefined}>

            </Section>
            <Section height={"70vh"} children={undefined}>

            </Section>
            <Section height={"25vh"} children={undefined}>

            </Section>
        </>
    )
}

export default Body
