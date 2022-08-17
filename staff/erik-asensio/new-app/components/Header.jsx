const { useState, useEffect } = React

function Header({ name, onSettingsClick, onLogoutClick, onMenuClick, view }) {


    return <div className="headerContainer">
        <div className="headerFlex">
        <h1 className="title">Hello, {name}!</h1>
        <a href="#" className="hamburgerMenu-icon" onClick={onMenuClick}><img src="./img/Hamburger_icon.png" className="hamburgerMenu-icon"/></a>
        </div>
        {view === "menu" && <Menu onSettingsClick={onSettingsClick} onLogoutClick={onLogoutClick}/>}
    </div>
    }
