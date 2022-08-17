class Header extends Component {
    constructor(props) {
        super(props)

        this.state= {view: null}
    }


    render() {
        return  <header>
        <div className="headerContainer">
        <h1 className="title">Hello, {this.props.name}!</h1>
        <a href="#" className="hamburgerMenu-icon" onClick={this.handleToggleMenu}><img src="./img/Hamburger_icon.png" className="hamburgerMenu-icon"></img></a>
        </div>
    </header>
    }
}
