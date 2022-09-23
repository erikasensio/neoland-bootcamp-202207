import MobileMenu from "../HomePage/components/MobileMenu"
import "./AquoPage.css"
import backIcon from "../../img/createPage/backIcon.svg"
import mainImg from "../../img/createPage/mainImage.png"
import editIcon from "../../img/createPage/editIcon.svg"
import deleteIcon from "../../img/aquoPage/deleteIcon.svg"
import refreshIcon from "../../img/aquoPage/refreshIcon.svg"
import deleteAquo from "../../logic/aquos/deleteAquo"
import Loggito from "../../utils/Loggito"
import retrieveAquo from "../../logic/aquos/retrieveAquo"
import toggleAquoOutput from "../../logic/aquos/toggleAquoOutput"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const logger = new Loggito("AquoPage")

function AquoPage({ onDeleted }) {
    const navigate = useNavigate()
    const { aquoId } = useParams()

    const [aquo, setAquo] = useState(null)


    useEffect(()=>{
        logger.debug('on mount')

        const intervalId = setInterval(() => HandleRetrieveAquo(), 1000) 
        
        return () => {
            logger.debug('on unmount')

            clearInterval(intervalId)
        }
    },[])

    const HandleDeleteAquo = () => {
        try {
            deleteAquo(sessionStorage.token, aquoId, error => {
                if (error) {
                    alert(error.message)
                    console.error(error.message)
                }
                logger.debug(`${aquo.name} deleted correctly`)
                navigate("/")
                onDeleted()
            })
        } catch (error) {
            alert(error.message)
            console.error(error.message)
        }
    }

    const HandleRetrieveAquo = () => {
        try {
            retrieveAquo(sessionStorage.token, aquoId, (error,aquo) => {
                if (error) {
                    alert(error.message)
                    console.error(error.message)
                }
                setAquo(aquo)
                logger.debug(`${aquo.name} retrieved correctly`)
            })
        } catch (error) {
            alert(error.message)
            console.error(error.message)
        }
    }

    const handleToggleAquoOutput1 = () => {
        try {
            toggleAquoOutput(sessionStorage.token, aquo.ip, "1", error => {
                if (error) {
                    alert(error.message)
                    console.error(error.message)
                }
                logger.debug(`pin1 toggled correctly`)
            })
        } catch (error) {
            alert(error.message)
            console.error(error.message)
        }
    }
    const handleToggleAquoOutput2 = () => {
        try {
            toggleAquoOutput(sessionStorage.token, aquo.ip, "2", error => {
                if (error) {
                    alert(error.message)
                    console.error(error.message)
                }
                logger.debug(`pin2 toggled correctly`)
            })
        } catch (error) {
            alert(error.message)
            console.error(error.message)
        }
    }
    const handleToggleAquoOutput3 = () => {
        try {
            toggleAquoOutput(sessionStorage.token, aquo.ip, "3", error => {
                if (error) {
                    alert(error.message)
                    console.error(error.message)
                }
                logger.debug(`pin3 toggled correctly`)
            })
        } catch (error) {
            alert(error.message)
            console.error(error.message)
        }
    }

    
    return <>
        {aquo && <div className="aquoPage">
            <div className="aquoPage-header">
                <Link to="/"><img src={backIcon} alt="back" className="aquoPage-header--backIcon" /></Link>
                <div className="aquoPage-header-container2">
                    <h1 className="aquoPage-header--title">{aquo.name}</h1>
                    <Link to={`/edit-aquo/${aquoId}`}><img src={editIcon} alt="" className="aquoPage-img--editIcon" /></Link>
                </div>
            </div>
            <div className="aquoPage-img">
                <img src={mainImg} alt="" className="aquoPage-img--mainImg" />
            </div>
            <div className="aquoPage-panel">

                <div className="aquoPage-panel--header">
                    <img onClick={HandleDeleteAquo} src={deleteIcon} alt="" className="panel-header--delete" />
                    <h2 className="panel-header--aquoType">{aquo.type}</h2>
                    <img onClick={HandleRetrieveAquo} src={refreshIcon} alt="" className="panel-header--refresh" />
                </div>
                <div className="aquoPage-panel--info">
                    <h2 className="panel-info--title">Status</h2>
                    <p className="panel-info--text">If you see a warning, you should take a look to your aquo</p>
                </div>
                <div className="aquoPage-form--ip">

                    <p type="text" id="pin3" className="aquoPage-form--ipInput" >IP: {aquo.ip}</p>
                </div>
                <div className="aquoPage-form--standardInputs">
                    <div className="aquoPage-form--pin1">
                        <label htmlFor="pin1" className="aquoPage-form--input1Label aquoPage-form--standardLabel">pin1:</label>
                        <div onClick={handleToggleAquoOutput1} type="text" id="pin1" className="aquoPage-form--input1Input aquoPage-form--standardInput" >{aquo.pin1}</div>
                    </div>

                    <div className="aquoPage-form--pin2">
                        <label htmlFor="pin2" className="aquoPage-form--input2Label aquoPage-form--standardLabel">pin2:</label>
                        <div onClick={handleToggleAquoOutput2} type="text" id="pin2" className="aquoPage-form--input2Input aquoPage-form--standardInput" >{aquo.pin2}</div>
                    </div>

                    <div className="aquoPage-form--pin3">
                        <label htmlFor="pin3" className="aquoPage-form--input3Label aquoPage-form--standardLabel">pin3:</label>
                        <div onClick={handleToggleAquoOutput3} type="text" id="pin3" className="aquoPage-form--input3Input aquoPage-form--standardInput" >{aquo.pin3}</div>
                    </div>
                </div>


                <MobileMenu />
            </div>
        </div>}
    </>
}

export default AquoPage