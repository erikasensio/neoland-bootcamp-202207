import "./RegisterPage.css"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import registerUser from "../../logic/users/registerUser"
import Loggito from "../../utils/Loggito"

const logger = new Loggito("RegisterPage")


function RegisterPage() {

    let navigate = useNavigate()

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        try {
            registerUser(name, email, password, error => {
                if (error) {
                    alert(error.message)
                    logger.error(error.message)
                }

                logger.debug("user registered correctly")
                navigate("/login")
            })
        } catch (error) {
            alert(error.message)
            logger.error(error.message)
        }
    }

    return <div className="registerPage">
        <div className="registerIntro">
            <h1 className="registerTitle">AQUO</h1>
            <h3 className="registerSubtitle">Manage Remotely</h3>
        </div>

        <form className="registerForm" onSubmit={handleFormSubmit}>
            <input className="registerForm-name" type="text" placeholder="Name" id="name" />
            <input className="registerForm-email" type="text" placeholder="Email" id="email" />
            <input className="registerForm-password" type="password" placeholder="Password" id="password" />
            <button className="registerForm-submit" type="submit">Register</button>
        </form>

        <div className="registerLogin">
            <p className="registerLogin-text">¿Already have an account?</p>
            <Link className="registerLogin-anchor" to={"/login"}>Login</Link>
        </div>
    </div>
}

export default RegisterPage