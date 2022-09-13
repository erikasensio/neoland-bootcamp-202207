import MobileMenu from "../HomePage/components/MobileMenu"
import "./AquoPage.css"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/createPage/mainImage.png"
import editIcon from "../../img/createPage/editIcon.svg"
import deleteIcon from "../../img/aquoPage/deleteIcon.svg"
import refreshIcon from "../../img/aquoPage/refreshIcon.svg"
import { Link } from "react-router-dom"

function AquoPage() {

    return <div className="aquoPage">
        <div className="aquoPage-header">
            <Link to="/"><img src={backIcon} alt="back" className="aquoPage-header--backIcon" /></Link>
            <div className="aquoPage-header-container2">
            <h1 className="aquoPage-header--title">aquoName</h1>
            <Link to={"/editAquo"}><img src={editIcon} alt="" className="aquoPage-img--editIcon" /></Link>
            </div>
        </div>
        <div className="aquoPage-img">
            <img src={mainImg} alt="" className="aquoPage-img--mainImg" />
        </div>
        <div className="aquoPage-panel">

            <div className="aquoPage-panel--header">
                <img src={deleteIcon} alt="" className="panel-header--delete" />
                <h2 className="panel-header--aquoType">AquoType</h2>
                <img src={refreshIcon} alt="" className="panel-header--refresh" />
            </div>
            <div className="aquoPage-panel--info">
                <h2 className="panel-info--title">Status</h2>
                <p className="panel-info--text">If you see a warning, you should take a look to your aquo</p>
            </div>

            <div className="aquoPage-form--standardInputs">
                <div className="aquoPage-form--input1">
                    <label htmlFor="input1" className="aquoPage-form--input1Label aquoPage-form--standardLabel">input1:</label>
                    <div type="text" id="input1" className="aquoPage-form--input1Input aquoPage-form--standardInput" >input1Value</div>
                </div>

                <div className="aquoPage-form--input2">
                    <label htmlFor="input2" className="aquoPage-form--input2Label aquoPage-form--standardLabel">input2:</label>
                    <div type="text" id="input2" className="aquoPage-form--input2Input aquoPage-form--standardInput" >input2Value</div>
                </div>

                <div className="aquoPage-form--input3">
                    <label htmlFor="input3" className="aquoPage-form--input3Label aquoPage-form--standardLabel">input3:</label>
                    <div type="text" id="input3" className="aquoPage-form--input3Input aquoPage-form--standardInput" >input3Value</div>
                </div>
            </div>
            <MobileMenu />
        </div>
    </div>
}

export default AquoPage