import "./ProfilePage.css"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/createPage/mainImage.png"
import editIcon from "../../img/createPage/editIcon.svg"
import logoutIcon from "../../img/profilePage/logoutIcon.svg"

import MobileMenu from "../HomePage/components/MobileMenu"
import { Link } from "react-router-dom"

function ProfilePage() {
    return <div className="profilePage">
        <div className="profilePage-header">
            <Link to="/"><img src={backIcon} alt="back" className="profilePage-header--backIcon" /></Link>
            <div className="profilePage-header-container2">
                <h1 className="profilePage-header--title">Your profile</h1>
                <Link to={"/editprofile"}><img src={editIcon} alt="" className="profilePage-img--editIcon" /></Link>
            </div>
        </div>
        <div className="profilePage-img">
            <img src={mainImg} alt="" className="profilePage-img--mainImg" />
        </div>
        <div className="profilePage-panel">

            <div className="profilePage-panel--header">
                <h2 className="panel-info--title">Information</h2>
                <img src={logoutIcon} alt="" className="panel-header--logout" />
            </div>

            <div className="profilePage-panel--info">

                <h4 className="panel-info--nameTitle">Name</h4>
                <p className="panel-info--name">User Name</p>
                <h4 className="panel-info--mailTitle">Mail</h4>
                <p className="panel-info--mail">User Email</p>
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