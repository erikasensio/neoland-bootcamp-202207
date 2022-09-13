import "./EditPage.css"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/createPage/mainImage.png"
import editIcon from "../../img/createPage/editIcon.svg"
import { Link } from "react-router-dom"

function EditPage() {
    return <div className="editPage">
        <div className="editPage-header">
            <Link to="/aquo"><img src={backIcon} alt="back" className="editPage-header--backIcon" /></Link>
            <h1 className="editPage-header--title">Edit Aquo</h1>
        </div>
        <div className="editPage-img">
            <img src={mainImg} alt="" className="editPage-img--mainImg" />
            <img src={editIcon} alt="" className="editPage-img--editIcon" />
        </div>
        <div className="editPage-panel">
            <form className="editPage-panel--form">
                <div className="editPage-form--name">
                    <label htmlFor="name" className="editPage-form--nameLabel editPage-form--label">Name:</label>
                    <input type="text" id="name" className="editPage-form--nameInput editPage-form--input" />
                </div>

                <div className="editPage-form--type">
                    <label htmlFor="type" className="editPage-form--typeLabel editPage-form--label">Type:</label>
                    <input type="text" id="type" className="editPage-form--typeInput editPage-form--input" />
                </div>

                <div className="editPage-form--standards">
                    <h3 className="editPage-form--standardTitle">Standard's:</h3>
                    <p className="editPage-form--standardInfo">Set the standard values, if these values exceeds you will be notified</p>
                </div>
                <div className="editPage-form--standardInputs">

                    <div className="editPage-form--input1">
                        <label htmlFor="input1" className="editPage-form--input1Label editPage-form--standardLabel">input1:</label>
                        <input type="text" id="input1" className="editPage-form--input1Input editPage-form--standardInput" />
                    </div>

                    <div className="editPage-form--input2">
                        <label htmlFor="input2" className="editPage-form--input2Label editPage-form--standardLabel">input2:</label>
                        <input type="text" id="input2" className="editPage-form--input2Input editPage-form--standardInput" />
                    </div>

                    <div className="editPage-form--input3">
                        <label htmlFor="input3" className="editPage-form--input3Label editPage-form--standardLabel">input3:</label>
                        <input type="text" id="input3" className="editPage-form--input3Input editPage-form--standardInput" />
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