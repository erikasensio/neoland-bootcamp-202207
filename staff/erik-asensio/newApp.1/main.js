const loginPage = document.querySelector(".page-login")
const registerPage = document.querySelector(".page-register")
const homePage = document.querySelector(".page-home")
const hamburguerMenu = document.querySelector(".page-hamburguerMenu")

// LOGIN PAGE

const registerLink = document.querySelector(".registerLink")
registerLink.onclick = function(event){
    event.preventDefault()

    loginPage.classList.add("off")
    registerPage.classList.remove("off")
}

const submitLogin = document.querySelector(".submitLogin")
submitLogin.onclick = function(event){
    event.preventDefault()

    loginPage.classList.add("off")
    homePage.classList.remove("off")
}

// REGISTER PAGE

const loginLink = document.querySelector(".loginLink")
loginLink.onclick = function(event){
    event.preventDefault()

    registerPage.classList.add("off")
    loginPage.classList.remove("off")
}

const submitRegister = document.querySelector(".submitRegister")
submitRegister.onclick = function(event){
    event.preventDefault()

    loginPage.classList.remove("off")
    registerPage.classList.remove("off")
}

// HOME PAGE


