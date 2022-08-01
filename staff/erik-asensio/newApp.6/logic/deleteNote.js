function deleteNote(token, noteId, callback) {
    //TOKEN
    if (typeof callback !== 'function') throw new TypeError("callback is not a function")
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    //NOTE ID
    if (typeof noteId !== 'string') throw new TypeError('note id is not a string')
    if (noteId.trim().length === 0) throw new Error('note id is empty or blank')

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

            const notes = data.notes ? data.notes : []

            const noteIndex = notes.findIndex(note => note.id === noteId)

            notes.splice(noteIndex, 1)

            const xhr2 = new XMLHttpRequest

            //response
            xhr2.onload = function () {
                const status2 = xhr2.status

                if (status2 > 499)
                    callback(new Error("server error " + status2))

                else if (status2 > 399)
                    callback(new Error("server error " + status2))

                else if (status2 === 204) {
                    callback(null)
                }
            }
            //request
            xhr.open("PATCH", "https://b00tc4mp.herokuapp.com/api/v2/users")

            xhr.setRequestHeader("content-type", "application/json")
            xhr.setRequestHeader("Authorization", `Bearer ${token}`)

            const json2 = JSON.stringify({ notes })
            xhr.send(json2)
        }
    }
    //request
    
    xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users")
    
    xhr.setRequestHeader("Authorization", `Bearer ${token}`)
    
    xhr.send()
}
