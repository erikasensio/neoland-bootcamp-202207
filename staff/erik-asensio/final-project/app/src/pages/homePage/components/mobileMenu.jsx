import "./MobileMenu.css"
import addIcon from "../../../img/mobileMenu/addIcon.svg"
import homeIcon from "../../../img/mobileMenu/homeIcon.svg"
import profileIcon from "../../../img/mobileMenu/profileIcon.svg"
import { Link } from "react-router-dom"

function MobileMenu(){
    return <div className="mobileMenu">
        <div className="mobileMenuContainer">
            <nav className="mobileMenu-menu">
                <Link className="mobileMenu-menu--home" to="/"><img className="mobileMenu-menu--homeIcon" src={homeIcon} alt="Home" /></Link>
                <button className="mobileMenu-menu--addButton"><Link to="/create-aquo"><img className="mobileMenu-menu--addIcon" src={addIcon} /></Link></button>
                <Link className="mobileMenu-menu--profile" to="/profile"><img className="mobileMenu-menu--profileIcon" src={profileIcon} alt="Profile" /></Link>
            </nav>
        </div>
    </div>
}

export default MobileMenu