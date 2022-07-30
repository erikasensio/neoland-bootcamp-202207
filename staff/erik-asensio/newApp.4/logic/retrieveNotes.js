function retrieveNotes(token, callback) {
    //TOKEN
    if (typeof token !== "string") throw typeError("token is not a string")
    if (token.trim === 0) throw Error("token is blank or empty")

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
    
            const notes = data.notes? data.notes.reverse() : []

            callback(null, notes)
        }
    }

    //request
    xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users")

    xhr.setRequestHeader("content-type", "application/json")
    xhr.setRequestHeader("Authorization", `Bearer ${token}`)

    xhr.send()
}
