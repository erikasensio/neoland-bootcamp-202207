const loginPage = document.querySelector(".page-login")
const registerPage = document.querySelector(".page-register")
const homePage = document.querySelector(".page-home")
const hamburguerMenu = document.querySelector(".page-hamburguerMenu")

//FUNCTIONS

//RENDER NOTES (NEW REFRESHLIST NAME)
function renderNotes() {
    try {
        retrieveNotes(sessionStorage.token, function (error, notes) {
            if (error) {
                alert(error.message)

                return
            }

            const list = homePage.querySelector('.list')
            list.innerHTML = ''
            notes.forEach(note => {
                const item = document.createElement('li')
                item.classList.add('list__item')

                const text = document.createElement('p')
                text.contentEditable = true
                text.classList.add('list__item-text')
                text.onkeyup = function () {
                    try {
                        updateNotes(sessionStorage.token, note.id, text.innerText, error => {
                            if (error) {
                                alert(error.message)

                                return
                            }
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                }
                text.innerText = note.text

                list.append(item)
                item.append(text)

            })
        })


    } catch (error) {
        alert(error.message)
    }
}

// REGISTER PAGE

const loginLink = document.querySelector(".loginLink")
loginLink.onclick = function (event) {
    event.preventDefault()

    registerPage.classList.add("off")
    loginPage.classList.remove("off")
}

const submitRegister = document.querySelector(".submitRegister")
submitRegister.onclick = function (event) {
    event.preventDefault()
    const registerForm = document.querySelector(".registerForm")
    const name = registerForm.name.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    try {
        registerUser(name, email, password, function (error) {

            if (error) {
                alert(error.message)
                return
            }

            registerForm.reset()

            loginPage.classList.remove("off")
            registerPage.classList.add("off")
        })
    } catch (error) {
        alert(error.message)
    }
}

// LOGIN PAGE

const registerLink = document.querySelector(".registerLink")
registerLink.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add("off")
    registerPage.classList.remove("off")
}
const loginForm = document.querySelector(".loginForm")
const submitLogin = document.querySelector(".submitLogin")
submitLogin.onclick = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value
    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)
                return
            }

            sessionStorage.token = token

            try {
                retrieveUser(sessionStorage.token, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    }

                    loginPage.classList.add("off")

                    const title = homePage.querySelector('.title')
                    title.innerText = 'Hello, ' + user.name + '!'

                    renderNotes()

                    homePage.classList.remove("off")
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }
}



// HOME PAGE

const createNoteButton = document.querySelector(".createNoteButton")
createNoteButton.onclick = function (event) {
    event.preventDefault()

    try {
        createNote(sessionStorage.token, function (error) {
            if (error) {
                alert(error.message)
                return
            }
            renderNotes()
        })
    } catch (error) {
        alert(error.message)
    }
}
