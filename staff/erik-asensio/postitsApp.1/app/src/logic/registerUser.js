import { EMAIL_REGEX } from "../Constants"

function registerUser(name, email, password, callback) {
    //VALIDATE INPUTS

    //NAME
    if (typeof name !== "string") throw TypeError("name is not a string")
    if (name.trim === 0) throw Error(name + " is empty or blank")

    //EMAIL
    if (typeof name !== "string") throw TypeError("email is not a string")
    if (name.trim === 0) throw Error("email is empty or blank")
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    //PASSWORD
    if (typeof password !== "string") throw TypeError("password is not a string")
    if (password.length < 6) throw Error("password is too short")

    //CALLBACK
    if (typeof callback !== 'function') throw new TypeError("callback is not a function")

    const xhr = new XMLHttpRequest

    //response
    xhr.onload = function () {
        const status = xhr.status

        if (status > 499)
            new Error("server error " + status)

        else if (status > 399)
            new Error("server error " + status)

        else if (status === 201) {
            callback(null)
        }
    }

    //request
    xhr.open("POST", "https://b00tc4mp.herokuapp.com/api/v2/users")

    xhr.setRequestHeader("content-type", "application/json")


    xhr.send(`{ "name": "${name}", "username": "${email}", "password": "${password}" }`)
}

export default registerUser