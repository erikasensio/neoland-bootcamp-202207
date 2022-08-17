const { useState } = React

function Menu({ onLogoutClick, onSettingsClick, view }) {
    const logger = new Loggito("Menu")

    return <div className="menu-panel">

        <ul className="menu-panel__list">

            <li><button className="menu-panel__list-item settings-button transparent-button" onClick={onSettingsClick}> Settings</button></li>

            <li><button className="menu-panel__list-item logout-button transparent-button" onClick={onLogoutClick}>Logout</button></li>
        </ul>
    </div>
}