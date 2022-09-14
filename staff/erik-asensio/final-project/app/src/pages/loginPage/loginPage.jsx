import "./LoginPage.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import authenticateUser from "../../logic/users/authenticateUser"
import Loggito from "../../utils/Loggito"


const logger = new Loggito("LoginPage")

function LoginPage() {

    let navigate = useNavigate()

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        try {
            authenticateUser(email, password, (error,token) => {
                if (error) {
                    alert(error.message)
                    logger.error(error.message)
                }

                logger.debug("user authenticated correctly")
                navigate("/")

                sessionStorage.token = token
            })
        } catch (error) {
            alert(error.message)
            logger.error(error.message)
        }
    }

    return <div className="loginPage">
        <div className="loginIntro">
            <h1 className="loginTitle">AQUO</h1>
            <h3 className="loginSubtitle">Manage Remotely</h3>
        </div>

        <form className="loginForm" onSubmit={handleFormSubmit}>
            <input className="loginForm-email" type="text" placeholder="Email" id="email" />
            <input className="loginForm-password" type="password" placeholder="Password" id="password" />
            <button className="loginForm-submit" type="submit">Login</button>
        </form>

        <div className="loginRegister">
            <p className="loginRegister-text">¿Do not have an account?</p>
            <Link className="loginRegister-anchor" to={"/register"}>Register now</Link>
        </div>
    </div>
}

export default LoginPage