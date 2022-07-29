function retrieveUser(email, callback){

    //EMAIL
    if(typeof email !== "string") throw new TypeError("Email is not a string")
    if(email.trim().length === 0) throw new Error("Email is empty or blank")
    if(email.length < 6) throw new Error("Email length is not correct")
    if(!email.match(EMAIL_REGEX)) throw new Error("Email is not valid")

    //CALLBACK
    if(typeof callback !== "function") throw new TypeError("Callback is not a function")

    //
    const user = users.find(function (user) {
        return user.email === email
    })

    if(!user){
        callback(new Error("Wrong email"))
        return
    }

    callback(null, user)
}