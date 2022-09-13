const express = require('express')
const { Router, json } = express
const jsonBodyParser = json()
const { registerUserHandler, authenticateUserHandler, retrieveUserHandler } = require('./users')
// const { createAquoHandler, retrieveAquoHandler, updateAquoHandler, searchAquoHandler } = require('./aquos')

const usersRouter = Router()

usersRouter.post('/users', jsonBodyParser, registerUserHandler)
usersRouter.post('/users/auth', jsonBodyParser, authenticateUserHandler)
usersRouter.get('/users', retrieveUserHandler)
// usersRouter.patch('/users/email', jsonBodyParser, updateUserEmailHandler)
// usersRouter.patch('/users/password', jsonBodyParser, updateUserPasswordHandler)
// usersRouter.patch('/users/info', jsonBodyParser, updateUserInfoHandler)

// const aquoRouter = Router()

// aquoRouter.post('/aquos', jsonBodyParser, createAquoHandler)
// aquoRouter.get('/aquos', retrieveaquoHandler)
// aquoRouter.patch('/aquos/:aquoId', jsonBodyParser, updateAquoTextHandler)
// aquoRouter.get('/aquos/search', searchAquoHandler)

module.exports = {
    usersRouter,
    // aquoRouter
}