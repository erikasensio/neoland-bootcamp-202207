function userValidation(email, password, callback){

    //MAIL
    if(typeof email !== "string") throw new TypeError("Email is not a string")
    if(email.trim().length === 0) throw new Error("Email is empty or blank")
    if(email.length < 6) throw new Error("Email length is not correct")

    //PASSWORD
    if(typeof password !== "string") throw new TypeError("Password is not a string")
    if(password.trim().length === 0) throw new Error("Password is empty or blank")
    if(password.length < 8) throw new Error("Password is too short")
    if(password.length > 16) throw new Error("Password is too long")

    //CALLBACK
    if(typeof callback !== "function") throw new TypeError("Callback is not a function")

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
            
            token = data.token

            callback(null, token)
        }
            
    }

    // request
    
    xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
    
    xhr.setRequestHeader('content-type', "application/json")

    xhr.send(`{"username":"${email}", "password":"${password}"}`)
}