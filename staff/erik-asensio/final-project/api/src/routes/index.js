const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
// const { createAquoHandler, retrieveAquoHandler, updateAquoHandler, searchAquoHandler } = require('./aquos')
const { createAquoHandler, retrieveAquosHandler } = require("./aquos")

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
// usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)
// usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)
// usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

const aquosRouter = Router()

aquosRouter.post('/aquos', jsonBodyParser, createAquoHandler)
aquosRouter.get('/aquos', retrieveAquosHandler)
// aquoRouter.patch('/aquos/:aquoId', jsonBodyParser, updateAquoHandler)
// aquoRouter.get('/aquos/search', searchAquoHandler)

module.exports = {
    usersRouter,
    aquosRouter
}