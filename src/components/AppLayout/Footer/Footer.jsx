import { NavLink } from "react-router-dom"
import "./Footer.css"
import FooterData from "../../../api/FooterData.json"
import { MdPlace } from "react-icons/md"
import { IoCallSharp } from "react-icons/io5"
import { TbMailPlus } from "react-icons/tb"

const Footer = () => {

  const iconData = {
    MdPlace: <MdPlace color="#ff9900" size={36}/>,
    IoCallSharp: <IoCallSharp color="#ff9900" size={36}/>,
    TbMailPlus: <TbMailPlus color="#ff9900" size={36}/>,
  }

  return (
    <footer>
      <section className="footer-section-contact">
        <ul >
          {
            FooterData.map((currEle) => {
              const {icon, title, details} = currEle;
              return<li key={icon} className="footer-contact-list">
                    <div>
                      {iconData[icon]}
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{details}</p>
                    </div>
                </li>
            }) 
          }
        </ul>
      </section>
      <section className="footer-section">
        <div>
          <p>copyright @ 2024. All Right Reserved <NavLink to={"/"} target="_top" className="link">CountryAltast</NavLink></p>
        </div>
        <ul className="footer-index">
          <li>
            <NavLink to={"/"} target="_top">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/country"} target="_top">
              Country
            </NavLink>
          </li>
          <li>
            <NavLink to={"https://github.com/Lucky-Bhure/CountryAtlas.git"} target="_blank">
              Source Code
            </NavLink>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
