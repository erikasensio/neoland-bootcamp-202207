import "./HomePage.css"
import { useEffect } from "react"
import MobileMenu from "./components/MobileMenu"
import retrieveUser from "../../logic/retrieveUser"
import { useState } from "react"
import Loggito from "../../utils/Loggito"
import withContext from "../../utils/withContext"

const logger = new Loggito("HomePage")


function HomePage() {
    const [name, setName] = useState(null)
    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error,user) => {
                if (error) {
                    alert(error.message)
                    logger.error(error.message)

                    // onLogout()
                    return
                }

                setName(user.name)
                logger.debug(`user: ${user.name} retrieved correctly`)
            })

        } catch (error) {
            alert(error.message)
            logger.error(error.message)
        }
    }, [])

    return <div className="homePage">
            <h1 className="homePageTitle">Your Aquos</h1>
            <MobileMenu />
        </div>

}

export default withContext(HomePage)