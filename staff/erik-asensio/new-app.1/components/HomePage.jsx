class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = { name: null, notes: null }
    }

    componentDidMount = () => { // override
        super.componentDidMount()

        try {
            retrieveUser(sessionStorage.token, (error, user) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.setState({ name: user.name })

            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }

        this.loadNotes()
    }

    loadNotes = () => {
        try {
            retrieveNotes(sessionStorage.token, (error, notes) => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.setState({ notes })
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    handleAddClick = () => {
        try {
            createNote(sessionStorage.token, error => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.loadNotes()
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    handleUpdateNote = (noteId, text) => {
        try {
            updateNotes(sessionStorage.token, noteId, text, error => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }
                this.logger.debug("note updated")
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    handleDeleteNote = noteId => {
        try {
            deleteNote(sessionStorage.token, noteId, error => {
                if (error) {
                    alert(error.message)

                    this.logger.warn(error.message)

                    return
                }

                this.loadNotes()
            })
        } catch (error) {
            alert(error.message)

            this.logger.warn(error.message)
        }
    }

    render() {

        return this.state.name ?
            <main className="page-home">
                <Header name={this.state.name}/>

                <List notes={this.state.notes} onDeleteNote={this.handleDeleteNote} onUpdateNote={this.handleUpdateNote}/>
                <footer>

                    <button className="createNoteButton" onClick={this.handleAddClick}>+</button>

                </footer>

            </main>
            :
            null
    }
}