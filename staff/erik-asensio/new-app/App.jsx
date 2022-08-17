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
        return <HomePage onLogoutClick={handleLogoutClick}/>
}
