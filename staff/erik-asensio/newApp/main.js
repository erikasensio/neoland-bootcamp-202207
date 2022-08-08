const login = new Login
const register = new Register
const home = new Home
// const hamburguerMenu = document.querySelector(".page-hamburguerMenu")

document.body.append(login.container)

//REGISTER PAGE
register.onLinkClick(function () {

    document.body.removeChild(register.container)
    document.body.append(login.container)
})

register.onSubmitForm(function (name, email, password) {
    try {
        registerUser(name, email, password, function (error) {
            if (error) {
                alert(error.message)
                return
            }

            register.reset()
            document.body.removeChild(register.container)
            document.body.append(login.container)
        })
    } catch (error) {
        alert(error.message)
    }
})


//LOGIN PAGE
login.onLinkClick(function () {

    document.body.removeChild(login.container)
    document.body.append(register.container)
})

login.onSubmitForm(function (email, password) {
    try {
        authenticateUser(email, password, function (error, token) {
            if (error) {
                alert(error.message)
                return
            }

            login.reset()
            sessionStorage.token = token
            document.body.removeChild(login.container)
            try {
                retrieveUser(sessionStorage.token, function (error, user) {
                    if (error) {
                        alert(error.message)
                        return
                    } try {
                        retrieveNotes(sessionStorage.token, function (error, notes) {
                            if (error) {
                                alert(error.message)

                                return
                            }
                            home.setName(user.name)
                            home.renderList(notes.reverse())
                            document.body.append(home.container)
                        })
                    } catch (error) {
                        alert(error.message)
                    }
                })
            } catch (error) {
                alert(error.message)
            }
        })
    } catch (error) {
        alert(error.message)
    }
})

//HOME PAGE
home.onUpdateNote = function (noteId, text) {
    try {
        updateNotes(sessionStorage.token, noteId, text, error => {
            if (error) {
                alert(error.message)

                return
            }
        })
    } catch (error) {
        alert(error.message)
    }
}

home.onDeleteNoteClick = function (noteId) {
    try {
        deleteNote(sessionStorage.token, noteId, function(error,notes) {
            if (error) {
                alert(error.message)

                return
            }
            home.renderList(notes)
        })
    } catch (error) {
        alert(error.message)
    }
}

home.onCreateNoteClick = error => {
        try{
            createNote(sessionStorage.token, function(error,notes) {
            if (error) {
                alert(error.message)

                return
            }
            home.renderList(notes)
        })
    }catch(error){
        alert(error.message)
    }
}



// // REGISTER PAGE

// const loginLink = document.querySelector(".loginLink")
// loginLink.onclick = function (event) {
//     event.preventDefault()

//     registerPage.classList.add("off")
//     loginPage.classList.remove("off")
// }

// const submitRegister = document.querySelector(".submitRegister")
// submitRegister.onclick = function (event) {
//     event.preventDefault()
//     const registerForm = document.querySelector(".registerForm")
//     const name = registerForm.name.value
//     const email = registerForm.email.value
//     const password = registerForm.password.value

//     try {
//         registerUser(name, email, password, function (error) {

//             if (error) {
//                 alert(error.message)
//                 return
//             }

//             registerForm.reset()

//             loginPage.classList.remove("off")
//             registerPage.classList.add("off")
//         })
//     } catch (error) {
//         alert(error.message)
//     }
// }



// // LOGIN PAGE

// const registerLink = document.querySelector(".registerLink")
// registerLink.onclick = function (event) {
//     event.preventDefault()

//     loginPage.classList.add("off")
//     registerPage.classList.remove("off")
// }
// const loginForm = document.querySelector(".loginForm")
// const submitLogin = document.querySelector(".submitLogin")
// submitLogin.onclick = function (event) {
//     event.preventDefault()

//     const email = loginForm.email.value
//     const password = loginForm.password.value
//     try {
//         authenticateUser(email, password, function (error, token) {
//             if (error) {
//                 alert(error.message)
//                 return
//             }

//             sessionStorage.token = token
//             renderHome()
//         })
//     } catch (error) {
//         alert(error.message)
//     }
// }



// // HOME PAGE

// const createNoteButton = document.querySelector(".createNoteButton")
// createNoteButton.onclick = function (event) {
//     event.preventDefault()

//     try {
//         createNote(sessionStorage.token, function (error) {
//             if (error) {
//                 alert(error.message)
//                 return
//             }
//             renderNotes()
//         })
//     } catch (error) {
//         alert(error.message)
//     }
// }



// //FUNCTIONS

// //RENDER HOME
// function renderHome() {
//     try {
//         retrieveUser(sessionStorage.token, function (error, user) {
//             if (error) {
//                 alert(error.message)
//                 return
//             }

//             loginPage.classList.add("off")

//             const title = homePage.querySelector('.title')
//             title.innerText = 'Hello, ' + user.name + '!'

//             renderNotes()

//             homePage.classList.remove("off")
//         })
//     } catch (error) {
//         alert(error.message)
//     }
// }


// //RENDER NOTES (NEW REFRESHLIST NAME)
// function renderNotes() {
//     try {
//         retrieveNotes(sessionStorage.token, function (error, notes) {
//             if (error) {
//                 alert(error.message)

//                 return
//             }

//             const list = homePage.querySelector('.list')
//             list.innerHTML = ''
//             notes.forEach(note => {
//                 const item = document.createElement('li')
//                 item.classList.add('list__item')

//                 const deleteButton = document.createElement('button')
//                 deleteButton.classList.add('list__item-delete-button')
//                 deleteButton.innerText = 'x'
//                 deleteButton.onclick = function () {
//                     try {
//                         deleteNote(sessionStorage.token, note.id, error => {
//                             if (error) {
//                                 alert(error.message)

//                                 return
//                             }

//                             renderNotes()
//                         })
//                     } catch (error) {
//                         alert(error.message)
//                     }
//                 }

//                 const text = document.createElement('p')
//                 text.contentEditable = true
//                 text.classList.add('list__item-text')
//                 text.onkeyup = function () {
//                     try {
//                         updateNotes(sessionStorage.token, note.id, text.innerText, error => {
//                             if (error) {
//                                 alert(error.message)

//                                 return
//                             }
//                         })
//                     } catch (error) {
//                         alert(error.message)
//                     }
//                 }
//                 text.innerText = note.text

//                 list.append(item)
//                 item.append(deleteButton, text)
//                 item.append(text)

//             })
//         })


//     } catch (error) {
//         alert(error.message)
//     }
// }