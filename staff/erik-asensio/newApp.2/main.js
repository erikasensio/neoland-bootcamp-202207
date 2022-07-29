const loginPage = document.querySelector(".page-login")
const registerPage = document.querySelector(".page-register")
const homePage = document.querySelector(".page-home")
const hamburguerMenu = document.querySelector(".page-hamburguerMenu")


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

    createNote(token, callback)
}
