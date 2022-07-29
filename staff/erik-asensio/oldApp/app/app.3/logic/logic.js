// // put here the logic funcs form main.js

// function userValidation(email, password , callback){

//     //MAIL
//     if(typeof email !== "string") throw new TypeError("Email is not a string")
//     if(email.trim().length === 0) throw new Error("Email is empty or blank")
//     if(email.length < 6) throw new Error("Email length is not correct")

//     //PASSWORD
//     if(typeof password !== "string") throw new TypeError("Password is not a string")
//     if(password.trim().length === 0) throw new Error("Password is empty or blank")
//     if(password.length < 8) throw new Error("Password is too short")
//     if(password.length > 16) throw new Error("Password is too long")

//     //NAME (Maybe better for the register validation)
//     // if(typeof name !== String) throw new TypeError("Name is not a string")
//     // if(name.trim().length === 0) throw new Error("Name empty or blank")

//     //CALLBACK
//     if(typeof callback !== "function") throw new TypeError("Callback is not a function")

//     //
//     const user = users.find(function (user) {
//         return user.email === email && user.password === password
//     })

//     if(!user){
//         callback(new Error("Datos incorrectos, vuelve a intentarlo."))
//         return
//     }
//     callback(null)
// }

// function retrieveUser(email, callback){

//         //EMAIL
//         if(typeof email !== "string") throw newTypeError("Email is not a string")
//         if(email.trim().length === 0) throw new Error("Email is empty or blank")
//         if(email.length < 6) throw new Error("Email length is not correct")

//         //CALLBACK
//         if(typeof callback !== "function") throw new TypeError("Callback is not a function")

//         //
//         const user = users.find(function (user) {
//             return user.email === email
//         })

//         if(!user){
//             callback(new Error("Wrong email"))
//             return
//         }

//         callback(null, user)
// }

