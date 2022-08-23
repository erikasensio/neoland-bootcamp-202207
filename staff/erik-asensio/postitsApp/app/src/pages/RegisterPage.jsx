import Loggito from "../utils/Loggito"
import registerUser from "../logic/registerUser"

function RegisterPage({onLinkClick, onRegister}) {
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

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        try {
            registerUser(name, email, password, (error) => {
                if (error) {
                    alert(error.message)
                    logger.warn("user not registered")
                    return
                }

                onRegister()

                logger.debug("user registered")
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return (<main className="page-register">

        <form className="registerForm" onSubmit={handleFormSubmit}>

            <label htmlFor="name">name:</label>
            <input name="name" type="text" id="name"/>

            <label htmlFor="email">email:</label>
            <input name="email" type="email" id="email"/>

            <label htmlFor="password">password:</label>
            <input name="password" type="password" id="password"/>

            <button className="submitRegister" type="submit">REGISTER</button>
            <a className="loginLink anchor" href="register.html" onClick={handleLinkClick}>Login Now!</a>
        </form>
    </main>)
}

export default RegisterPage