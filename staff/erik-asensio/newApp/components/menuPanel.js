class MenuPanel extends Component {
    constructor() {
        super(`<div class="menu-panel">
            <ul class="menu-panel__list">
                <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button> Settings</li>
                <li><button class="logout-button transparent-button"><span class="material-symbols-outlined">logout</span></button> Logout</li>
            </ul>
        </div>`)

        this.menuPanelList = this.container.querySelector(".menu-panel-list")
        this.menuPanelListItemSettings = this.container.querySelector(".menu-panel__list-item-settings")

        const logoutButton = this.container.querySelector(".logout-button")
        logoutButton.onclick = () => {
            this.onLogout()
        }

        const settingsButton = this.container.querySelector(".menu-panel__list-item-settings")
        settingsButton.onclick = () => {
            this.onSettings()
        }
    }
    onLogout = null

    onStteings = null

    showSettings() {
        this.menuPanelList.prepend(this.menuPanelListItemSettings)
    }

    hideSettings() {
        this.menuPanelList.removeChild(this.menuPanelListItemSettings)
    }
}