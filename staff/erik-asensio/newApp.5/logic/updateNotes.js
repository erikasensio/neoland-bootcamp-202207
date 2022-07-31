function updateNotes(token, noteId, text, callback) {

    //TOKEN
    if (typeof callback !== 'function') throw new TypeError("callback is not a function")
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    //NOTE ID
    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

    //TEXT
    if (typeof text !== 'string') throw new TypeError('text is not a string')

    //CALLBACK
    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    xhr.onload = function () {
        const status = xhr.status

        if (status > 499)
            callback(new Error("server error " + status))

        else if (status > 399)
            callback(new Error("server error " + status))

        else if (status === 200) {
            const json = xhr.responseText

            const data = JSON.parse(json)

            const notes = data.notes ? data.notes : []

            const note = notes.find(note => note.id === noteId)

            if (!note) {
                callback(new Error(`note with id ${noteId} not found`))

                return
            }

            note.text = text

            const xhr2 = new XMLHttpRequest
            
            //response
            xhr2.onload = function () {
                const status = xhr2.status
                if (status > 499)
                    callback(new Error("server error " + status))

                else if (status > 399)
                    callback(new Error("server error " + status))

                else if (status === 204) {
                    callback(null)
                }
            }
            //request
            xhr.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users")

            xhr.setRequestHeader("Authorization", `Bearer ${token}`)
            xhr.setRequestHeader("content-type", `application/json`)

            //const json2 = JSON.stringify({ notes: notes })
            const json2 = JSON.stringify({ notes })

            xhr.send(json2)
        }
    }
    //request

    xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users")

    xhr.setRequestHeader("Authorization", `Bearer ${token}`)

    xhr.send()
}
