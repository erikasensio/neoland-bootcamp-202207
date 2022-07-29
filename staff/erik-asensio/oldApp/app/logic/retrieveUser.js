function retrieveUser(token, callback) {


    //TOKEN
    if (typeof token !== "string") throw new TypeError("token is not a string")

    //CALLBACK
    if (typeof callback !== "function") throw new TypeError("Callback is not a function")

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status
        
        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {
            json = xhr.responseText
            
            data = JSON.parse(json)

            callback(null, data)
        }
    }

    // request

    xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.setRequestHeader('content-type', "application/json")
    xhr.setRequestHeader('Authorization', `Bearer ${token}`) // "Bearer "+ token)

    xhr.send()
}