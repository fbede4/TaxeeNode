var requireOption = require('../common').requireOption;

/**
 * Get the vehicle for the vehicleid param
 *  - if there is no such vehicle, redirect to /vehicles
 *  - if there is one, put it on res.tpl.vehicle
 */

module.exports = function (objectrepository) {

    var vehicleModel = requireOption(objectrepository, 'vehicleModel');

    return function (req, res, next) {

        return next();
    };

};
