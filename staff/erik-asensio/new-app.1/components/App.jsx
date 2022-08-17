class App extends Component {
    constructor(props) {
        super(props)

        const logger = new Loggito("App")

        this.logger = logger

        this.logger.info("constructor")

        this.state = { view: "login" }
        this.logger.info('render')
    }

    handleNavToHome = () => {this.setState({view:"home"})}
    handleNavToLogin = () => {this.setState({view:"login"})}
    handleNavToRegister = () => {this.setState({view:"register"})}
    

    render() {
        this.logger.info("rendered")

        if (this.state.view === "login")
            return <LoginPage onLinkClick={this.handleNavToRegister} onLogIn={this.handleNavToHome}/>

        else if (this.state.view === "register")
            return <RegisterPage onLinkClick={this.handleNavToLogin} onRegister={this.handleNavToLogin}/>

        else if (this.state.view === "home")
            return <HomePage/>
    }
}
