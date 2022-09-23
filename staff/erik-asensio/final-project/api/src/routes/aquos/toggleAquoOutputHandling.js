const { runWithErrorHandling, createLogger} = require('../../utils')
const { aquos: { toggleAquoOutput } } = require('../../logic')
const logger = createLogger(module)

module.exports = (req, res) => {
    runWithErrorHandling(() => {

        const { params: { aquoIp, pin }} = req

        return toggleAquoOutput(aquoIp, pin)
            .then(() => res.status(200))
    }, res, logger)
}