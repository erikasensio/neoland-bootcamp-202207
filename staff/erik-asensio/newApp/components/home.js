
class Home {
    constructor() {
        const temp = document.createElement("temp")

        temp.innerHTML = `<main class="page-home">
                            <header>
                                <div class="headerContainer">
                                <h1 class="title">Hello User!</h1>
                                <a href="#" class="hamburgerMenu-icon"><img src="img/Hamburger_icon.png" class="hamburgerMenu-icon"></img></a>
                                </div>
                            </header>

                            <section class="noteBlog">
                                <ul class="list">
                                    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum
                                        cursus sollicitudin. Duis consectetur sem sit amet mi efficitur dignissim. Suspendisse rutrum purus
                                        eget lectus ultrices, sed elementum quam imperdiet. Praesent pulvinar, est volutpat fermentum
                                        sollicitudin, leo arcu tristique nisl, eget vulputate enim dui in ipsum.</li>

                                    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum
                                        cursus sollicitudin. Duis consectetur sem sit amet mi efficitur dignissim. Suspendisse rutrum purus
                                        eget lectus ultrices, sed elementum quam imperdiet. Praesent pulvinar, est volutpat fermentum
                                        sollicitudin, leo arcu tristique nisl, eget vulputate enim dui in ipsum.</li>

                                    <li class="list__item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum
                                        cursus sollicitudin. Duis consectetur sem sit amet mi efficitur dignissim. Suspendisse rutrum purus
                                        eget lectus ultrices, sed elementum quam imperdiet. Praesent pulvinar, est volutpat fermentum
                                        sollicitudin, leo arcu tristique nisl, eget vulputate enim dui in ipsum.</li>
                                </ul>
                            </section>
                            <footer>

                                <button class="createNoteButton">+</button>

                            </footer>

                        </main>`
        this.container = temp.firstChild

        //HOME

        const addButton = this.container.querySelector(".createNoteButton")
        addButton.onclick = () => {
            this.onCreateNoteClick()
        }


        //HAMBURGUER MENU

        const header = this.container.querySelector("header")
        const menuButton = this.container.querySelector(".hamburgerMenu-icon")

        const temp2 = document.createElement('temp')
        temp2.innerHTML = '<button class="close-button transparent-button"><span class="material-symbols-outlined">X</span></button>'

        const closeButton = temp2.firstChild
        const main = temp.querySelector('main')
        const headerContainer = header.querySelector(".headerContainer")

        const temp3 = document.createElement('temp')
        temp3.innerHTML = `<div class="menu-panel">
                        <ul class="menu-panel__list">
                            <li class="menu-panel__list-item-settings"><button class="settings-button transparent-button"><span class="material-symbols-outlined">settings</span></button></li>
                            <li><button class="logoutButton transparent-button"><span class="material-symbols-outlined">logout</span></button></li>
                        </ul>
                    </div>`

        const menuPanel = temp3.firstChild
        const menuPanelList = menuPanel.querySelector('.menu-panel__list')
        const menuPanelListItemSettings = menuPanelList.querySelector('.menu-panel__list-item-settings')

        const settingsButton = menuPanel.firstChild
        const logoutButton = menuPanel.querySelector(".logoutButton")

        const temp4 = document.createElement('temp')
        temp4.innerHTML = `<div class="settings-panel">
                        Settings
        
                        <button class="close-settings-button transparent-button"><span class="material-symbols-outlined">close</span></button>
        
                        TODO implement me
                    </div>`

        const settingsPanel = temp4.firstChild

        menuButton.onclick = () => {
            headerContainer.removeChild(menuButton)
            headerContainer.append(closeButton)

            const notesList = this.container.querySelector(".list")
            notesList.style.marginTop="170px";

            header.append(menuPanel)
        }
        
        closeButton.onclick = () => {
            headerContainer.removeChild(closeButton)
            headerContainer.append(menuButton)

            const notesList = this.container.querySelector(".list")
            notesList.style.marginTop="70px";

            header.removeChild(menuPanel)
        }

        settingsButton.onclick = () => {
            closeButton.click()

            menuPanelList.removeChild(menuPanelListItemSettings)
            main.removeChild(menuPanelList)
            footer.removeChild(addButton)

            main.append(settingsPanel)
        }

        menuPanel.querySelector('.logoutButton').onclick = () => {
            this.onLogout()
        }
    }

    setName(name) {
        this.container.querySelector(".title").innerText = "Hello " + name + "!"
    }

    renderList(notes) {
        notes = notes.reverse()
        const list = this.container.querySelector(".list")
        list.innerHTML = ""

        notes.forEach(note => {


            const item = document.createElement('li')
            item.classList.add('list__item')

            const deleteButton = document.createElement('button')
            deleteButton.classList.add('list__item-delete-button')
            deleteButton.innerText = 'x'


            deleteButton.onclick = () => {
                this.onDeleteNoteClick(note.id)
            }

            const text = document.createElement('p')
            text.contentEditable = true
            text.classList.add('list__item-text')

            text.onkeyup = () => {
                if (window.updateNoteTimeoutId)
                    clearTimeout(window.updateNoteTimeoutId)

                window.updateNoteTimeoutId = setTimeout(() => {
                    this.onUpdateNote(note.id, text.innerText)
                }, 500)
            }

            text.innerText = note.text

            list.append(item)
            item.append(deleteButton, text)
            item.append(text)
        })
    }

    onDeleteNoteClick = null

    onUpdateNote = null

    onLogout = null
}

