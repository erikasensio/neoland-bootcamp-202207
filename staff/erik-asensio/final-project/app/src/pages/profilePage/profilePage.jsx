import "./ProfilePage.css"
import { useEffect, useState } from "react"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/profilePage/profileImg.webp"
import logoutIcon from "../../img/profilePage/logoutIcon.svg"
import Loggito from "../../utils/Loggito"
import MobileMenu from "../HomePage/components/MobileMenu"
import retrieveUser from "../../logic/users/retrieveUser"
import { useNavigate, Link } from "react-router-dom"

const logger = new Loggito("ProfilePage")
function ProfilePage() {

    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    const onLogout = () => {
        delete sessionStorage.token
        logger.debug("user logout correctly")
        navigate("/login")
    }

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, _user) => {
                if (error) {
                    alert(error.message)
                    logger.error(error.message)

                    onLogout()

                    return
                }

                logger.debug(`user: ${_user.name} retrieved correctly`)
                setUser(_user)
                return
            })
        } catch (error) {
            alert(error.message)
            logger.error(error.message)
        }
    }, [])

    return <div className="profilePage">
        <div className="profilePage-header">
            <Link to="/"><img  src={backIcon} alt="back" className="profilePage-header--backIcon" /></Link>
            <div className="profilePage-header-container2">
                <h1 className="profilePage-header--title">Your profile</h1>
            </div>
        </div>
        <div className="profilePage-img">
            <img src={mainImg} alt="" className="profilePage-img--mainImg" />
        </div>
        <div className="profilePage-panel">

            <div className="profilePage-panel--header">
                <h2 className="panel-info--title">Information</h2>
                <img onClick={onLogout} src={logoutIcon} alt="" className="panel-header--logout" />
            </div>

            <div className="profilePage-panel--info">

                <h4 className="panel-info--nameTitle">Name</h4>
                {user && <p className="panel-info--name">{user.name}</p>}
                <h4 className="panel-info--mailTitle">Mail</h4>
                {user && <p className="panel-info--mail">{user.email}</p>}
            </div>
            {/* <div className="profilePage-panel--privacy">
            <h2 className="panel-privacy--title">Privacy and security</h2>
            <h4 className="panel-privacy--passwordTitle">Password</h4>
            <p className="panel-privacy--password">Change password</p>
            <h4 className="panel-privacy--mail">Mail</h4>
            <p className="panel-privacy--password">Change mail</p>
        </div> */}
            <MobileMenu />
        </div>
    </div>
}

export default ProfilePage