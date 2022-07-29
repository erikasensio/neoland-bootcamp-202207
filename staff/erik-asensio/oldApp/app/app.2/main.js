const loginPage = document.querySelector(".page-login")
const registerPage = document.querySelector(".page-register")
const homePage = document.querySelector(".page-home1")

const registerLink = loginPage.querySelector(".enlaceRegistro")
registerLink.onclick = function (event) {
    event.preventDefault()

    loginPage.classList.add("off")
    registerPage.classList.remove("off")
}

const loginLink = registerPage.querySelector(".enlaceLogin")
loginLink.onclick = function (event) {
    event.preventDefault()

    registerPage.classList.add("off")
    loginPage.classList.remove("off")
}

const loginForm = loginPage.querySelector(".form-login")
loginForm.onsubmit = function (event) {
    event.preventDefault()

    const email = loginForm.email.value
    const password = loginForm.password.value

    const user = users.find(function (user) {
        return user.email === email && user.password === password
    })

    if (user) {
        loginPage.classList.add("off")

        const title = homePage.querySelector(".homeTitle")
        title.innerText = "Hello " + user.name + "!"

        homePage.classList.remove("off")
    } else
        alert("Datos incorrectos, vuelve a intentarlo.")
}

const registerForm = registerPage.querySelector(".form-register")
registerForm.onsubmit = function (event) {
    event.preventDefault()

    loginPage.classList.add("off")
    registerPage.classList.remove("off")

    const name = registerForm.username.value
    const email = registerForm.email.value
    const password = registerForm.password.value

    const user = users.find(function (user) {

        return user.email === email
    })

    if (user)
        alert("user already exists")
    else {
        users.push({
            name: name,
            email: email,
            password: password
        })
        registerPage.classList.add("off")
        loginPage.classList.remove("off")
    }
}