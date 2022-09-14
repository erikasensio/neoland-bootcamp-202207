import "./CreatePage.css"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/createPage/mainImage.png"
import editIcon from "../../img/createPage/editIcon.svg"
import { Link } from "react-router-dom"
import createAquo from "../../logic/aquos/createAquo"

function CreatePage() {

    const handleFormSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const type = form.type.value
        const input1 = form.input1.value
        const input2 = form.input2.value
        const input3 = form.input3.value

        createAquo(sessionStorage.token, name, type, input1, input2, input3, error => {
            if(error){
                alert(error.message)
                console.error(error.message)
            }
        })
    }

    return <div className="createPage">
        <div className="createPage-header">
            <Link to="/"><img src={backIcon} alt="back" className="createPage-header--backIcon" /></Link>
            <h1 className="createPage-header--title">Create Aquo</h1>
        </div>
        <div className="createPage-img">
            <img src={mainImg} alt="" className="createPage-img--mainImg" />
            <img src={editIcon} alt="" className="createPage-img--editIcon" />
        </div>
        <div className="createPage-panel">
            <form className="createPage-panel--form" onSubmit={handleFormSubmit}>
                <div className="createPage-form--name">
                    <label htmlFor="name" className="createPage-form--nameLabel createPage-form--label">Name:</label>
                    <input type="text" id="name" className="createPage-form--nameInput createPage-form--input" />
                </div>

                <div className="createPage-form--type">
                    <label htmlFor="type" className="createPage-form--typeLabel createPage-form--label">Type:</label>
                    <input type="text" id="type" className="createPage-form--typeInput createPage-form--input" />
                </div>

                <div className="createPage-form--standards">
                    <h3 className="createPage-form--standardTitle">Standard's:</h3>
                    <p className="createPage-form--standardInfo">Set the standard values, if these values exceeds you will be notified</p>
                </div>
                <div className="createPage-form--standardInputs">

                    <div className="createPage-form--input1">
                        <label htmlFor="input1" className="createPage-form--input1Label createPage-form--standardLabel">input1:</label>
                        <input type="text" id="input1" className="createPage-form--input1Input createPage-form--standardInput" />
                    </div>

                    <div className="createPage-form--input2">
                        <label htmlFor="input2" className="createPage-form--input2Label createPage-form--standardLabel">input2:</label>
                        <input type="text" id="input2" className="createPage-form--input2Input createPage-form--standardInput" />
                    </div>

                    <div className="createPage-form--input3">
                        <label htmlFor="input3" className="createPage-form--input3Label createPage-form--standardLabel">input3:</label>
                        <input type="text" id="input3" className="createPage-form--input3Input createPage-form--standardInput" />
                    </div>
                </div>
                <div className="createPage-form--submit">
                    <button className="createPage-form--submitButton">Create</button>
                </div>
            </form>
        </div>
    </div>
}

export default CreatePage