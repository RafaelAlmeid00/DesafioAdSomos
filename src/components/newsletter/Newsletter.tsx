import Button from "../button/Button"
import Search from "../search/Search"
import Title from "../text/Title"
import Text from "../text/Text"
import { useEffect, useState } from "react";

function Newsletter() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth < 768);
      }
  
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return (
        <>
            <div className="newsletter content--padding content--marginright">
                <div className="newsletter__text content-displaycolumn">
                    <div className="newsletter__text__title">
                        <Title text={"Newsletter"} pd="newsletter__text__title--mobile"/>
                    </div>
                    <div className="newsletter__text__text">
                        <Text text={"Sign up and receive firsthand updates to take advantage of the products on sale!"} pd={"newsletter__text--margintop newsletter__text__text--mobile"} />
                    </div>
                </div>
                <div className="newsletter__subscribe">
                    <Search text={"Email Adress"} pd="search--newsletter content--border " />
                    <Button width={isMobile ? "20vw" : "15vw"} height={"5vh"} text={"Subscribe"} link={"https://adsomos.com/"} />
                </div>
            </div>
        </>
    )
}

export default Newsletter