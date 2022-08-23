import "./index2.css"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import HomePage from "./pages/HomePage"
import Loggito from "./utils/Loggito"
import { useState } from "react"
import Context from "./utils/Context"

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

    const toggleTheme = () => {
        document.documentElement.classList.toggle("light")
    }

    logger.info("rendered")


    return <Context.Provider value={{ toggleTheme, handleNavToLogin }}>
        
            {view === "login" && <LoginPage onLinkClick={handleNavToRegister} onLogIn={handleNavToHome} />}

            {view === "register" && <RegisterPage onLinkClick={handleNavToLogin} onRegister={handleNavToLogin} />}

            {view === "home" && <HomePage onLogoutClick={handleLogoutClick} />}
        
    </Context.Provider>
}

export default App
