const { model } = require('mongoose')
const { user, aquo } = require('./schemas')

module.exports = {
    User: model('User', user),
    Note: model('Aquo', aquo)
}