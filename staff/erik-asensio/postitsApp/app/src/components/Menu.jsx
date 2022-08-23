import withContext from "../utils/withContext"
import Loggito from "../utils/Loggito"
import SettingsIcon from "../img/settings-svgrepo-com.svg"
import ThemeIcon from "../img/dark-theme-svgrepo-com.svg"
import LogoutIcon from "../img/logout-svgrepo-com.svg"

function Menu({ onLogoutClick, onSettingsClick, context: {toggleTheme} }) {
    const logger = new Loggito("Menu")

    return <div className="menu-panel">

        <ul className="menu-panel__list">

            <li><button className="menu-panel__list-item settings-button transparent-button" onClick={onSettingsClick}><img className="menu-panel__list-icon" src={SettingsIcon} alt="" /></button></li>

            <li><button className="menu-panel__list-item dark-theme-button transparent-button" onClick={toggleTheme}><img className="menu-panel__list-icon" src={ThemeIcon} alt="" /></button></li>

            <li><button className="menu-panel__list-item logout-button transparent-button" onClick={onLogoutClick}><img className="menu-panel__list-icon" src={LogoutIcon} alt="" /></button></li>
        </ul>
    </div>
}

export default withContext(Menu)