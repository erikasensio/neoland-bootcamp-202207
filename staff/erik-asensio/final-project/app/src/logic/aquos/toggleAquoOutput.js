const API_URL = process.env.REACT_APP_API_URL

function toggleAquoOutput(token, aquoIp, pin, callback) {
    if (typeof token !== 'string') throw new TypeError('token is not a string')
    if (token.trim().length === 0) throw new Error('token is empty or blank')

    if (typeof aquoIp !== 'string') throw new TypeError('aquoId is not a string')
    if (aquoIp.trim().length === 0) throw new Error('aquoId is empty or blank')

    if (typeof callback !== 'function') throw new TypeError('callback is not a function')

    const xhr = new XMLHttpRequest

    // response

    xhr.onload = function () {
        const status = xhr.status

        if (status >= 500)
            callback(new Error(`server error (${status})`))
        else if (status >= 400)
            callback(new Error(`client error (${status})`))
        else if (status === 200) {
            const json = xhr.responseText

            const aquo = JSON.parse(json)

            callback(null)
        }
    }

    // request

    xhr.open('POST', `${API_URL}/aquos/${aquoIp}/${pin}`)

    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default toggleAquoOutput