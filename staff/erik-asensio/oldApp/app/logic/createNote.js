function createNote(token, callback) {

    if (!token) {
        callback(new Error("invalid " + token))
        return
    }

    const xhr = new XMLHttpRequest

    //response
    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {

            json = xhr.responseText

            data = JSON.parse(json)

            const newNote = {
                id: "note-" + Date.now(),
                text: "",
            }

            notes = data.notes ? data.notes.reverse() : []
            notes.push(newNote)




            const xhr2 = new XMLHttpRequest

            //response
            xhr2.onload = function () {
                const status = xhr2.status

                if (status >= 500)
                    callback(new Error(`server error (${status})`))
                else if (status >= 400)
                    callback(new Error(`client error (${status})`))
                else if (status === 204)
                callback(null, newNote)

                //request

                
            }
            xhr2.open('PATCH', 'https://b00tc4mp.herokuapp.com/api/v2/users')

                xhr2.setRequestHeader("Authorization", "Bearer " + token)
                xhr2.setRequestHeader('content-type', "application/json")

                //const json2 = JSON.stringify({ notes: notes })
                const json2 = JSON.stringify({ notes })

                xhr2.send(json2)
        }
    }

    // request

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)


    xhr.send()
}