class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = ({ player: "x" })
    }

    handleClick = event => {
        const cell = event.target
        const index = cell.dataset.index
        let player = this.state.player
        if (board[index])
            return
        else

        clicked.innerText = player
        if (player === "x") {
            player = "o"
        } else if (player === "o") {
            player = "x"
        }

        this.setState({ player , board })
    }


    render() {
        return (
            <main>
                <div className="table">
                    <div className="2 board-cell" data-index="2" onClick={this.handleClick}></div>
                    <div className="1 board-cell" data-index="1" onClick={this.handleClick}></div>
                    <div className="3 board-cell" data-index="3" onClick={this.handleClick}></div>
                    <div className="4 board-cell" data-index="4" onClick={this.handleClick}></div>
                    <div className="5 board-cell" data-index="5" onClick={this.handleClick}></div>
                    <div className="6 board-cell" data-index="6" onClick={this.handleClick}></div>
                    <div className="7 board-cell" data-index="7" onClick={this.handleClick}></div>
                    <div className="8 board-cell" data-index="8" onClick={this.handleClick}></div>
                    <div className="9 board-cell" data-index="9" onClick={this.handleClick}></div>
                </div>
            </main>
        )
    }
}