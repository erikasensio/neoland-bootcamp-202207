import "./mobileMenu.css"
import addIcon from "../../../img/mobileMenu/addIcon.svg"
import homeIcon from "../../../img/mobileMenu/homeIcon.svg"
import profileIcon from "../../../img/mobileMenu/profileIcon.svg"
import { Link } from "react-router-dom"

function MobileMenu(){
    return <div className="mobileMenu">
        <div className="mobileMenuContainer">
            <nav className="mobileMenu-menu">
                <a className="mobileMenu-menu--home" ><Link to="/"><img className="mobileMenu-menu--homeIcon" src={homeIcon} alt="Home" /></Link></a>
                <button className="mobileMenu-menu--addButton"><Link to="/createAquo"><img className="mobileMenu-menu--addIcon" src={addIcon} /></Link></button>
                <a className="mobileMenu-menu--profile"><Link to="/profile"><img className="mobileMenu-menu--profileIcon" src={profileIcon} alt="Profile" /></Link></a>
            </nav>
        </div>
    </div>
}

export default MobileMenu