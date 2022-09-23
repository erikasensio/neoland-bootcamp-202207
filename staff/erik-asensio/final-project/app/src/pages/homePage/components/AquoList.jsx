import "./AquoList.css"
import { Link } from "react-router-dom"
import profilePhoto from "../../../img/createPage/mainImage.png"
import seeMore from "../../../img/homePage/seeMore.svg"

function AquoList({ aquos, onClickAquo }) {
    return <ul className="aquoList">
        {aquos && aquos.map(aquo =>
            <li className="aquoList__item" key={aquo.id}>
                <div className="aquoList-aquo">
                    <div className="aquoList-aquo--imageSq">
                        <img className="aquoList-aquo--image" src={profilePhoto} alt="" />
                    </div>
                    <div className="aquoList-container">
                        <div className="aquoList-aquo--header">
                            <h3 className="aquoList-aquo--name">{aquo.name}</h3>
                            <Link to={`/aquo/${aquo.id}`} onClick={() => onClickAquo(aquo.id)}><img className="aquoList-aquo--seeMoreIcon" src={seeMore} alt="" /></Link>

                        </div>
                        <div className="aquoList-aquo--inputs">

                            <div className="aquoList-aquo--pin1">
                                <label htmlFor="pin1" className="aquoList-aquo--input1Label aquoList-aquo--standardLabel"><img src="" alt="" /></label>
                                <div id="pin1" className="aquoList-aquo--input1Input aquoList-aquo--standardInput" ><h4>{aquo.pin1}</h4></div>
                            </div>

                            <div className="aquoList-aquo--pin2">
                                <label htmlFor="pin2" className="aquoList-aquo--input2Label aquoList-aquo--standardLabel"><img src="" alt="" /></label>
                                <div id="pin2" className="aquoList-aquo--input2Input aquoList-aquo--standardInput" ><h4>{aquo.pin2}</h4></div>
                            </div>

                            <div className="aquoList-aquo--pin3">
                                <label htmlFor="pin3" className="aquoList-aquo--input3Label aquoList-aquo--standardLabel"><img src="" alt="" /></label>
                                <div id="pin3" className="aquoList-aquo--input3Input aquoList-aquo--standardInput" ><h4>{aquo.pin3}</h4></div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>)
        }
    </ul >
}
export default AquoList