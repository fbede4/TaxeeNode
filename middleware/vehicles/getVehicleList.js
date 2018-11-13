
var requireOption = require('../common').requireOption;

/**
 * Get the vehicle list and put the inventories on res.tpl.vehicles
 */

module.exports = function (objectrepository) {

    var vehicleModel = requireOption(objectrepository, 'vehicleModel');

    return function (req, res, next) {

        return next();
    };

};