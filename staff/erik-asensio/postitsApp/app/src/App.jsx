import "./index2.css"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import Loggito from "./loggito"
import { useState } from "react"

function App() {
    const logger = new Loggito("App")

    logger.info("constructor")

    const [view, setView] = useState("login")
    logger.info('render')


    const handleNavToHome = () => { setView("home") }
    const handleNavToLogin = () => { setView("login") }
    const handleNavToRegister = () => { setView("register") }

    const handleLogoutClick = () => {
        delete sessionStorage.token

        setView("login")
    }


    logger.info("rendered")
    if (view === "login")
        return <LoginPage onLinkClick={handleNavToRegister} onLogIn={handleNavToHome} />

    else if (view === "register")
        return <RegisterPage onLinkClick={handleNavToLogin} onRegister={handleNavToLogin} />

    else if (view === "home")
        return <HomePage onLogoutClick={handleLogoutClick} />
}

export default App
