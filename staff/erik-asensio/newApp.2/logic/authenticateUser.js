function authenticateUser(email, password, callback) {
    //VALIDATE INPUTS

    //EMAIL
    if (typeof name !== "string") throw TypeError("email is not a string")
    if (name.trim === 0) throw Error("email is empty or blank")
    if (!EMAIL_REGEX.test(email)) throw new Error('email is not valid')

    //PASSWORD
    if (typeof password !== "string") throw typeError("password is not a string")
    if (password.length < 6) throw Error("password is too short")

    //CALLBACK
    if (typeof callback !== 'function') throw new TypeError("callback is not a function")


    const xhr = new XMLHttpRequest

    //response
    xhr.onload = function () {
        const status = xhr.status

        if (status > 499)
            callback(new Error("server error " + status))

        else if (status > 399)
            callback(new Error("server error " + status))
        
        else if (status === 200) {
            const json = xhr.responseText

            const data = JSON.parse(json)

            const token = data.token

            callback(null, token)
        }
    }

    //request
    xhr.open("POST", "https://b00tc4mp.herokuapp.com/api/v2/users/auth")

    xhr.setRequestHeader("Content-type", "application/json")

    xhr.send(`{ "username": "${email}", "password": "${password}" }`)
}