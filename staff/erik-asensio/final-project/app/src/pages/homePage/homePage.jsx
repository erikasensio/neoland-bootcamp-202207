import "./HomePage.css"
import AquoPage from "../AquoPage/AquoPage"
import EditPage from "../EditPage/EditPage"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import MobileMenu from "./components/MobileMenu"
import AquoList from "./components/AquoList"
import retrieveUser from "../../logic/users/retrieveUser"
import Loggito from "../../utils/Loggito"
import retrieveAquos from "../../logic/aquos/retrieveAquos"
import refreshIcon from "../../img/aquoPage/refreshIcon.svg"

const logger = new Loggito("HomePage")

function HomePage() {

    const [aquos, setAquos] = useState(undefined)

    const [aquoSelected, setAquoSelected] = useState(null)

    const [timestamp, setTimestamp] = useState(null)

    const navigate = useNavigate()

    const onLogout = () => {
        delete sessionStorage.token
        navigate("/login")
    }

    useEffect(() => {
        if (sessionStorage.token === undefined) {
            navigate("/login")
        } else {
            try {
                retrieveUser(sessionStorage.token, (error, user) => {
                    if (error) {
                        logger.error(error.message)
                        onLogout()
                        return
                    }
                    logger.debug(`user: ${user.name} retrieved correctly`)
                    try {
                        retrieveAquos(sessionStorage.token, (error, aquos) => {
                            if (error) {
                                logger.error(error.message)
                            }

                            logger.debug("aquos retrieved correctly")

                            setAquos(aquos)
                            return aquos
                        })
                    } catch (error) {
                        logger.error(error.message)
                    }
                })
            } catch (error) {
                logger.error(error.message)
            }
        }
    }, [timestamp])

    const handleAquoSelected = aquoId => {
        const aquoS = aquos.find(aquo => aquo.id === aquoId)

        setAquoSelected(aquoS)
    }


    const handleEdited = () => setTimestamp(Date.now())
    const handleDeleted = () => setTimestamp(Date.now())
    const handleRefreshed = () => setTimestamp(Date.now())


    return <Routes>
        <Route path="/" element={(<div className="homePage">
            <div className="homePage-header">
                <h1 className="homePageTitle">Your Aquos</h1>
                <img onClick={handleRefreshed} src={refreshIcon} alt="" className="homePageRefresh" />
            </div>
            <div className="homePage-scroll">
                <AquoList aquos={aquos} onClickAquo={handleAquoSelected} />
            </div>
            <MobileMenu />
        </div>)} />

        <Route path="/aquo/:aquoId" element={<AquoPage aquo={aquoSelected} onDeleted={handleDeleted} onRefreshed={handleRefreshed} />} />
        <Route path="/edit-aquo/:aquoid" element={<EditPage aquo={aquoSelected} onEdited={handleEdited} />} />

    </Routes>
}

export default HomePage