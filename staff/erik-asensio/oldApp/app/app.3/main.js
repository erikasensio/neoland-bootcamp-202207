const loginPage = document.querySelector(".page-login")
const registerPage = document.querySelector(".page-register")
const homePage = document.querySelector(".page-home1")
const hamburgerPage = document.querySelector(".page-hamburgerMenu")

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
    
    // const user = users.find(function (user) {
        //     return user.email === email && user.password === password
        // })
        
        // if (user) {
            //     loginPage.classList.add("off")
            
            //     const title = homePage.querySelector(".homeTitle")
            //     title.innerText = "Hello " + user.name + "!"
            
            //     homePage.classList.remove("off")
            // }else
            //     alert("Datos incorrectos, vuelve a intentarlo.")
            
            try{
                
                userValidation(email, password, function(error){
                    
                    if (error){
                        alert(error.message)
                        
                        return
                    }
                    
                    try{
                        retrieveUser(email, function(error, user){
                            if(error){
                                alert(error.message)
                                return
                            }
                            loginPage.classList.add("off")
                            
                            const title = homePage.querySelector(".homeTitle")
                            title.innerText = "Hello " + user.name + "!"
                            
                            homePage.classList.remove("off")
                            
                        })
                    }catch(error){
                        alert(error.message)
                    }
                })
            }catch(error){
                alert(error.message)
            }
        }
        
        
        
        const registerForm = registerPage.querySelector(".form-register")
        registerForm.onsubmit = function (event) {
            event.preventDefault()
            
            loginPage.classList.add("off")
            registerPage.classList.remove("off")
            
            const name = registerForm.name.value
            const email = registerForm.email.value
            const password = registerForm.password.value
            
            
            // const user = users.find(function (user) {
                
                //     return user.email === email
                // })
                
                // if (user)
                //     alert("user already exists")
                // else {
                    // users.push({
                        //     name: name,
                        //     email: email,
                        //     password: password
                        
                        // registerPage.classList.add("off")
                        // loginPage.classList.remove("off")
                        // })
                        
                        //  if(!user){
                            //     registerPage.classList.add("off")
                            //     loginPage.classList.remove("off")
                            //  }
                            
                            try{
                                registerUser(name, email, password, function(error){
                                    if(error){
                                        alert(error.message)
                                        
                                        return
                                    }
                                    
                                    registerPage.classList.add("off")
                                    loginPage.classList.remove("off")
                                })
                                
                            }catch(error){
                                alert(error.message)
                            }
                        }
                        
const hamburgerMenuIcon = homePage.querySelector(".hamburgerMenu-icon")
hamburgerMenuIcon.onclick = function (event){
    event.preventDefault()

    homePage.classList.add("off")
    hamburgerPage.classList.remove("off")
}

const logoutLink = hamburgerPage.querySelector(".enlaceLogout")
logoutLink.onclick = function (event) {
    event.preventDefault()

    hamburgerPage.classList.add("off")
    loginPage.classList.remove("off")
}
