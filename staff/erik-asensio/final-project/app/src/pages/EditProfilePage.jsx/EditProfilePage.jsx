import "./EditProfilePage.css"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/createPage/mainImage.png"
import editIcon from "../../img/createPage/editIcon.svg"
import { Link } from "react-router-dom"

function EditProfilePage() {
    return <div className="editProfilePage">
        <div className="editProfilePage-header">
            <Link to="/profile"><img src={backIcon} alt="back" className="editProfilePage-header--backIcon" /></Link>
            <div className="editProfilePage-header-container2">
                <h1 className="editProfilePage-header--title">Edit Profile</h1>
            </div>
        </div>
        <div className="editProfilePage-img">
            <img src={mainImg} alt="" className="editProfilePage-img--mainImg" />
            <img src={editIcon} alt="" className="editProfilePage-img--editIcon"/>
        </div>
        <div className="editProfilePage-panel">

            <form className="editProfilePage-panel--form">
                <div className="editProfilePage-form--name">
                    <label htmlFor="name" className="editProfilePage-form--nameLabel editProfilePage-form--label">Name:</label>
                    <input type="text" id="name" className="editProfilePage-form--nameInput editProfilePage-form--input" />
                </div>

                <div className="editProfilePage-form--email">
                    <label htmlFor="email" className="editProfilePage-form--emailLabel editProfilePage-form--label">Mail:</label>
                    <input type="text" id="email" className="editProfilePage-form--emailInput editProfilePage-form--input" />
                </div>

                <div className="editProfilePage-form--password">
                    <label htmlFor="oldPassword" className="editProfilePage-form--oldPasswordLabel editProfilePage-form--label">Old Password:</label>
                    <input type="text" id="oldPassword" className="editProfilePage-form--oldPasswordInput editProfilePage-form--input" />

                    <label htmlFor="newPassword" className="editProfilePage-form--newPasswordLabel editProfilePage-form--label">New Password:</label>
                    <input type="text" id="newPassword" className="editProfilePage-form--newPasswordInput editProfilePage-form--input" />

                    <label htmlFor="newPasswordRepeat" className="editProfilePage-form--newPasswordRepeatLabel editProfilePage-form--label">New Password Repeat:</label>
                    <input type="text" id="newPasswordRepeat" className="editProfilePage-form--newPasswordRepeatInput editProfilePage-form--input" />
                </div>

                <div className="editProfilePage-form--submit">
                    <button className="editProfilePage-form--submitButton">Update Profile</button>
                </div>
            </form>
            {/* <div className="editProfilePage-panel--privacy">
            <h2 className="panel-privacy--title">Privacy and security</h2>
            <h4 className="panel-privacy--passwordTitle">Password</h4>
            <p className="panel-privacy--password">Change password</p>
            <h4 className="panel-privacy--mail">Mail</h4>
            <p className="panel-privacy--password">Change mail</p>
        </div> */}
            
        </div>
    </div>
}

export default EditProfilePage