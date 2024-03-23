import Image from "../image/Image"
import logo from "../../assets/adsomos_logo.jpg"
import Text from "../text/Text"

function Footer() {

  return (
    <>
      <footer className="footer primarycolor--background content--displayflex">
        <div className="footer__infos content--displaycolumn">
          <Image height={"10vh"} width={"7vw"} src={logo} alt={"Logo"} />
          <div className="footer__infos__text">
            <Text text={"1717 Harrison St, San Francisco, CA 94103, USA"} />
          </div>
        </div>
        <div className="footer__mainmenu content--displaycolumn">
          <h2 className="footer__title">MAIN MENU</h2>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Home</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">About</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Shop</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Help</p></a>
        </div>
        <div className="footer__company content--displaycolumn">
          <h2 className="footer__title">COMPANY</h2>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">The Company</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Careers</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Press</p></a>
        </div>
        <div className="footer__discover content--displaycolumn">
          <h2 className="footer__title">DISCOVER</h2>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">The Team</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Our History</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Brand Motto</p></a>
        </div>
        <div className="footer__finduson content--displaycolumn">
          <h2 className="footer__title">FIND US ON</h2>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Facebook</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Twitter</p></a>
          <a className="footer__link" href="https://adsomos.com/"><p className="footer__text">Instagram</p></a>
        </div>
      </footer >
    </>
  )
}

export default Footer
