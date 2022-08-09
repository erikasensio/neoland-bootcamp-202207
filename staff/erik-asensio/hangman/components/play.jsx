class Play extends React.Component {
    constructor(props) {
        super(props)

        this.state = { result: WordSelected, view: "play", wordShown: "_".repeat(result.length), counter: 10 }
    }

    handleSubmit = event =>{
        event.preventDefault()

        const charTried = event.target.input.value
        if(this.props.WordSelected.includes(charTried))
    }


    render() {
        return (
        <section>
            <h1>{this.state.wordShown}</h1>
            <form onSubmit={handleSubmit}>
                <input type="chartried" placeholder="try a char" />
                <button type="submit">Try</button>
            </form>

            <h1>{this.state.counter}</h1>
        </section>
        )
    }
}