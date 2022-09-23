const { Aquo } = require('../../models')
const { NotFoundError, SystemError, FormatError } = require('errors')
const { verifyObjectIdString } = require('../../utils')
const axios = require('axios').default;

function toggleAquoOutput(aquoIp, pin) {

    debugger

    return (axios.post(`http://${aquoIp}:8080/output/${pin}/toggle`))
        .then((response) => {
            debugger
            const { status } = response

            if (status !== 200)
                throw new Error(`aquo with ip ${aquoIp} failed to toggle pin ${pin}`)
        })
}


module.exports = toggleAquoOutput