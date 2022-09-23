import "./EditPage.css"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/createPage/mainImage.png"
import editIcon from "../../img/createPage/editIcon.svg"
import { Link, useNavigate } from "react-router-dom"
import updateAquo from "../../logic/aquos/updateAquo"
import retrieveAquos from "../../logic/aquos/retrieveAquos"
import Loggito from "../../utils/Loggito"

const logger = new Loggito("EditPage")

function EditPage({ aquo, onEdited }) {
    const navigate = useNavigate()
    const aquoId = aquo.id
    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const type = form.type.value
        const pin1 = form.pin1.value
        const pin2 = form.pin2.value
        const pin3 = form.pin3.value
        const ip = form.ip.value

        try {
            updateAquo(sessionStorage.token, aquo.id, name, type, pin1, pin2, pin3, ip, error => {
                if (error) {
                    alert(error.message)
                    console.error(error.message)
                }
                logger.debug(`${aquo.name} updated correctly`)
                
                onEdited()
                navigate("/")
            })
        } catch (error) {
            alert(error.message)
            console.error(error.message)
        }
    }

    return <div className="editPage">
        <div className="editPage-header">
            <Link to={`/aquo/${aquoId}`}><img src={backIcon} alt="back" className="editPage-header--backIcon" /></Link>
            <h1 className="editPage-header--title">Edit Aquo</h1>
        </div>
        <div className="editPage-img">
            <img src={mainImg} alt="" className="editPage-img--mainImg" />
            <img src={editIcon} alt="" className="editPage-img--editIcon" />
        </div>
        <div className="editPage-panel">
            <form className="editPage-panel--form" onSubmit={handleFormSubmit}>
                <div className="editPage-form--name">
                    <label htmlFor="name" className="editPage-form--nameLabel editPage-form--label">Name:</label>
                    <input type="text" id="name" className="editPage-form--nameInput editPage-form--input" defaultValue={aquo.name} />
                </div>

                <div className="editPage-form--type">
                    <label htmlFor="type" className="editPage-form--typeLabel editPage-form--label">Type:</label>
                    <input type="text" id="type" className="editPage-form--typeInput editPage-form--input" defaultValue={aquo.type} />
                </div>
                <div className="editPage-form--ip">
                    <label htmlFor="type" className="editPage-form--ipLabel editPage-form--label">IP:</label>
                    <input type="text" id="ip" className="editPage-form--ipInput editPage-form--input" defaultValue={aquo.ip} />
                </div>

                <div className="editPage-form--standards">
                    <h3 className="editPage-form--standardTitle">Standard's:</h3>
                    <p className="editPage-form--standardInfo">Set the standard values, if these values exceeds you will be notified</p>
                </div>
                <div className="editPage-form--standardInputs">

                    <div className="editPage-form--pin1">
                        <label htmlFor="pin1" className="editPage-form--input1Label editPage-form--standardLabel">pin1:</label>
                        <input type="text" id="pin1" className="editPage-form--input1Input editPage-form--standardInput" defaultValue={aquo.pin1} />
                    </div>

                    <div className="editPage-form--pin2">
                        <label htmlFor="pin2" className="editPage-form--input2Label editPage-form--standardLabel">pin2:</label>
                        <input type="text" id="pin2" className="editPage-form--input2Input editPage-form--standardInput" defaultValue={aquo.pin2} />
                    </div>

                    <div className="editPage-form--pin3">
                        <label htmlFor="pin3" className="editPage-form--input3Label editPage-form--standardLabel">pin3:</label>
                        <input type="text" id="pin3" className="editPage-form--input3Input editPage-form--standardInput" defaultValue={aquo.pin3} />
                    </div>
                </div>
                <div className="editPage-form--submit">
                    <button className="editPage-form--submitButton">Update</button>
                </div>
            </form>
        </div>
    </div>
}

export default EditPage