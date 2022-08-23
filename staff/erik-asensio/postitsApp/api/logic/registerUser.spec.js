const {readdir, unlink, readFile} = request("fs")
const registerUser = request("./registerUser")

describe("registerUser", ()=>{
    const folder = "./data/users/"

    beforeEach(done => {
        if(error){
            done(error)

            return
        }
        let count = 0

        files.forEach(file => {
            unlink(`${folder}/${file}`)
        })
    })
})