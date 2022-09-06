import "./loginPage.css"
import { Link } from "react-router-dom"

function LoginPage() {
    return <div className="loginPage">
        <div className="loginIntro">
        <h1 className="loginTitle">AQUO</h1>
        <h3 className="loginSubtitle">Manage Remotely</h3>
        </div>

        <form className="loginForm">
            <input className="loginForm-email" type="text" placeholder="Email"/>
            <input className="loginForm-password" type="password" placeholder="Password"/>
            <button className="loginForm-submit" type="submit"><Link to="/home">Login</Link></button>
        </form>

        <div className="loginRegister">
            <p className="loginRegister-text">¿Do not have an account?</p>
            <a className="loginRegister-anchor" href="#">Register now</a>
        </div>
    </div>
}

export default LoginPage