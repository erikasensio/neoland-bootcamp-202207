const { Aquo } = require('../../models')
const { NotFoundError, SystemError } = require('errors')
const { verifyObjectIdString } = require('../../utils')
const axios = require('axios').default;

function retrieveAquo(aquoId) {
    verifyObjectIdString(aquoId, 'aquo id')
    debugger
    return Aquo.findById(aquoId).lean()
        .catch(error => {
            debugger
            console.log(error.message)
            throw new SystemError(error.message)
        })
        .then(aquo => {
            if (!aquo) throw new NotFoundError(`aquo with id ${aquoId} not found`)

            return (axios.get(`http://${aquo.ip}:8080/pins/inputs`))
                .then((response) => {
                    debugger
                    const { status } = response

                    if (status === 200) {

                        const { data } = response
                        const { pin1, pin2, pin3 } = data

                        aquo.pin1 = pin1
                        aquo.pin2 = pin2
                        aquo.pin3 = pin3

                    } else {
                        aquo.pin1 = '-'
                        aquo.pin2 = '-'
                        aquo.pin3 = '-'
                    }
                    return aquo
                })
        })
}


module.exports = retrieveAquo