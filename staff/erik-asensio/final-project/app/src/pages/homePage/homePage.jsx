import "./HomePage.css"
import { useEffect } from "react"
import MobileMenu from "./components/MobileMenu"
import retrieveUser from "../../logic/users/retrieveUser"
import Loggito from "../../utils/Loggito"
import withContext from "../../utils/withContext"
import retrieveAquos from "../../logic/aquos/retrieveAquos"

const logger = new Loggito("HomePage")


function HomePage() {

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)
                    logger.error(error.message)

                    // onLogout()
                    return
                }


                logger.debug(`user: ${user.name} retrieved correctly`)
                try {
                    retrieveAquos(sessionStorage.token, error => {
                        if(error) {
                            alert(error.message)
                            logger.error(error.message)
                        }
                        logger.debug("aquos retrieved")
                    })

                } catch (error) {
                    alert(error.message)
                    logger.error(error.message)
                }
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