var requireOption = require('../common').requireOption;

/**
 * Delete the vehicle object
 */

module.exports = function (objectrepository) {

    var vehicleModel = requireOption(objectrepository, 'vehicleModel');

    return function (req, res, next) {

        return next();
    };

};