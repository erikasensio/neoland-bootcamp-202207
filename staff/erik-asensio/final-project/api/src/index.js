const five = require("johnny-five")
const board = new five.Board
const express = require("express")
const api = express()
//const jsonBodyParser = express.json()
const fs = require('fs')

board.on("ready", function () {
    // api.get("/api/led/:pin", (req, res) => {
    //     const { params: { pin } } = req

    //         blinkLed(pin)
            
    //         res.send(`led pin ${pin} activated`)
    // })
    fs.readdir('.', console.log)
})

function blinkLed(pin){
    const led = new five.Led(pin)

    led.blink()
}

api.listen(8081, () => { console.log("api started") })