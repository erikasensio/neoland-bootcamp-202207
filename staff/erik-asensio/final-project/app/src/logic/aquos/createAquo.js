const API_URL = process.env.REACT_APP_API_URL

function createAquo(token, name, type, pin1, pin2, pin3, ip, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 201)
            callback(null)
    }

    // request

    xhr.open('POST', `${API_URL}/aquos`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-type', 'application/json')

    const json = JSON.stringify({ name, type, pin1, pin2, pin3, ip })

    xhr.send(json)
}


export default createAquo