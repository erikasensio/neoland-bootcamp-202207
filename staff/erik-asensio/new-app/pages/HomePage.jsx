const { useState, useEffect } = React

function HomePage({ onLogoutClick }) {

    const logger = new Loggito("Home")

    const [name, setName] = useState(null)
    const [notes, setNotes] = useState(null)
    const [view, setView] = useState("home")


    useEffect(() => { // override

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    logger.warn(error.message)

                    return
                }

                setName(user.name)

            })
        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }

        loadNotes()
    }, [])

    const loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    alert(error.message)

                    logger.warn(error.message)

                    return
                }

                setNotes(notes)
            })
        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }
    }

    const handleAddClick = () => {
        try {
            createNote(sessionStorage.token, error => {
                if (error) {
                    alert(error.message)

                    logger.warn(error.message)

                    return
                }

                loadNotes()
            })
        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }
    }

    const handleUpdateNote = (noteId, text) => {
        try {
            updateNotes(sessionStorage.token, noteId, text, error => {
                if (error) {
                    alert(error.message)

                    logger.warn(error.message)

                    return
                }
                logger.debug("note updated")
            })
        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }
    }

    const handleDeleteNote = noteId => {
        try {
            deleteNote(sessionStorage.token, noteId, error => {
                if (error) {
                    alert(error.message)

                    logger.warn(error.message)

                    return
                }

                loadNotes()
            })
        } catch (error) {
            alert(error.message)

            logger.warn(error.message)
        }
    }

    const handleSettingsClick = () => {

        setView("settings")
    }

    const handleMenuClick = () => {
        view === "menu" ? setView("close") : setView("menu")
        logger.debug("menu rendered")

        if (view === "menu") {
            <Menu onLogoutClick={onLogoutClick} onSettingsClick={handleSettingsClick}/>
        }
    }

    return name ?
        <main className="page-home">
            <Header name={name} onMenuClick={handleMenuClick} onSettingsClick={handleSettingsClick} onLogoutClick={onLogoutClick} view={view} />

            <List view={view} notes={notes} onDeleteNote={handleDeleteNote} onUpdateNote={handleUpdateNote} />
            <footer>

                <button className="createNoteButton" onClick={handleAddClick}>+</button>

            </footer>

        </main>
        :
        null
}
