class Input extends React.Component {
    constructor(props) {
        super(props)

        this.state = { result: [] }
    }

    handleSubmit = event =>{
        event.preventDefault()

        const inputValue = event.target.input.value
        const result = inputValue.split("",inputValue.length)
        this.setState({result})
    }

    render() {
        return <section>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="input" placeholder="put your word here"></input>
                <button>Play</button>
            </form>

        </section>
    }
}