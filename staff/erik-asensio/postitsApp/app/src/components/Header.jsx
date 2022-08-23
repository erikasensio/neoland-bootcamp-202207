import Settings from "./Settings"
import Menu from "./Menu"
import MenuIcon from "../img/Hamburger_icon.png"

function Header({ name, onSettingsClick, onLogoutClick, onMenuClick, view }) {


    return <div className="headerContainer">
        <div className="headerFlex">
        <h1 className="title">Hello, {name}!</h1>
        {view === "menu"? <a href="menu.html" className="hamburgerMenu-icon" onClick={onMenuClick}><p>X</p></a> : <a href="menu.html" className="hamburgerMenu-icon" onClick={onMenuClick}><img alt="" src={MenuIcon} className="hamburgerMenu-icon"/></a>}
        </div>
        {view === "menu" && <Menu onSettingsClick={onSettingsClick} onLogoutClick={onLogoutClick}/>}
        {view === "settings" && <Settings onLogout={onLogoutClick}/>}
    </div>
    }

export default Header