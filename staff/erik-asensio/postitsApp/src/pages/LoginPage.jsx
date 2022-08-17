function LoginPage({onLinkClick, onLogIn}) {
    const logger = new Loggito('LoginPage')

    logger.info('constructor')

    logger.info('render')

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    alert(error.message)
                    logger.warn(error.message)

                    return
                }

                logger.debug('user authenticated')
                
                sessionStorage.token = token
                onLogIn()
            })

        } catch (error) {
            alert(error.message)
            logger.warn(error.message)
        }
    }

    return (<main className="page-login">

        <form className="loginForm" onSubmit={handleFormSubmit}>

            <label htmlFor="email">email:</label>
            <input name="email" type="email" id="email"/>

            <label htmlFor="password">password:</label>
            <input name="password" type="password" id="password"/>

            <button className="submitLogin" type="submit">LOGIN</button>
            <a className="registerLink anchor" href="register.html" onClick={handleLinkClick}>Register Now!</a>

        </form>

    </main>)

}

export default LoginPage
