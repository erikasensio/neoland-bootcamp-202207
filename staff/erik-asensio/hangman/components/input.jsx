class Input extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = { result: [], view: null, wordShown: null, counter: null} 
    }

    handleSubmit = event =>{
        event.preventDefault()

        const wordSelected = event.target.input.value
        const result = wordSelected.split("",wordSelected.length)
        this.setState(<Play.state/>)
    }

    render() {
        return <section>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="input" placeholder="put your word here"></input>
                <button type="submit">Play</button>
            </form>
        </section>
    }
}