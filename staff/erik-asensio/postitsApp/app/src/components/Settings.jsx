import { useState } from "react"
import updateUserPassword from "../logic/updateUserPassword"
import Loggito from "../utils/Loggito"
import "./Settings.css"



function Settings() {
    const [view, setView] = useState("settings")
    const logger = new Loggito("settingsPage")

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const oldPassword = form.oldPassword.value
        const newPassword = form.newPassword.value
        const newPasswordRepeat = form.newPasswordRepeat.value


        try {
            updateUserPassword(sessionStorage.token, oldPassword, newPassword, newPasswordRepeat, (error) => {
                if (error) {
                    alert(error.message)
                    logger.warn(error.message)

                    return
                }

                logger.debug('password updated')
                setView("close")

            })

        } catch (error) {
            alert(error.message)
            logger.warn(error.message)
        }
    }


    return <div className="settings-panel container">

        <form className="update-mail-form form" onSubmit={handleFormSubmit}>
            <div className="form__field">
                <label htmlFor="currentMail">Current mail</label>
                <input className="input" type="email" name="currentMail" placeholder="current mail" id="currentMail" />
            </div>

            <div className="form__field">
                <label htmlFor="newMail">New email</label>
                <input className="input" type="email" name="newMail" placeholder="new mail" id="newMail" />
            </div>

            <div className="form__field">
                <label htmlFor="newMailRepeat">Repeat new email</label>
                <input className="input" type="email" name="newMailRepeat" placeholder="repeat new mail" id="newMailRepeat" />
            </div>

            <button className="button" type="submit">Update</button>
        </form>

        <form className="update-password-form form" onSubmit={handleFormSubmit}>
            <div className="form__field">
                <label htmlFor="oldPassword">Current password</label>
                <input className="input" type="password" name="oldPassword" placeholder="old password" id="oldPassword" />
            </div>

            <div className="form__field">
                <label htmlFor="newPassword">New password</label>
                <input className="input" type="password" name="newPassword" placeholder="new password" id="newPassword" />
            </div>

            <div className="form__field">
                <label htmlFor="newPasswordRepeat">Repeat new password</label>
                <input className="input" type="password" name="newPasswordRepeat" placeholder="repeat new password" id="newPasswordRepeat" />
            </div>

            <button className="button" type="submit">Update</button>
        </form>

    </div>
}

export default Settings