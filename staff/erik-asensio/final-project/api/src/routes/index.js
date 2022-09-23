const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
const { createAquoHandler, retrieveAquosHandler, updateAquoHandler,deleteAquoHandler, retrieveAquoHandler, toggleAquoOutputHandler } = require("./aquos")

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)

const aquosRouter = Router()

aquosRouter.post('/aquos', jsonBodyParser, createAquoHandler)
aquosRouter.get('/aquos', retrieveAquosHandler)
aquosRouter.get('/output/inputs', jsonBodyParser, retrieveAquosHandler)
aquosRouter.get('/aquos/:aquoId', retrieveAquoHandler)
aquosRouter.post('/aquos/:aquoIp/:pin', toggleAquoOutputHandler)
aquosRouter.patch('/edit-aquo/:aquoId', jsonBodyParser, updateAquoHandler)
aquosRouter.delete('/aquos/:aquoId', jsonBodyParser, deleteAquoHandler)


module.exports = {
    usersRouter,
    aquosRouter
}