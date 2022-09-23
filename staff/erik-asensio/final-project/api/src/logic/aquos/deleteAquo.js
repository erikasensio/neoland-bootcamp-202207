const { Aquo } = require("../../models");
const { NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");
const { verifyObjectIdString } = require("../../utils");

/**
 * Creates a aquo for a user.
 *
 * @param {string} userId The user id.
 *
 * @returns {Promise}
 *
 * @throws {TypeError} If any of the arguments does not match the expected type.
 * @throws {FormatError} If any of the arguments does not match the expected format.
 *
 * @throws {NotFoundError} If the user is not found.
 * @throws {SystemError} If an error happens in db.
 */

function deleteAquo(aquoId) {
  verifyObjectIdString(aquoId, "aquo id");

  return Aquo.findById(aquoId)
    .lean()
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((aquo) => {
      if (!aquo)
        throw new NotFoundError(`aquo with id ${aquoId} not found`);

      return Aquo.deleteOne({ _id: aquoId }).catch((error) => {
        throw new systemError(error.message);
      });
    })
    .then((aquo) => {});
}

module.exports = deleteAquo;