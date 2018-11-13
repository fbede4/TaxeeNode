var requireOption = require('../common').requireOption;

/**
 * Create (or update) vehicle if we have the data for it
 * update if we have a res.tpl.inventory, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /vehicles/:vehicleid
 */

module.exports = function (objectrepository) {

    var vehicleModel = requireOption(objectrepository, 'vehicleModel');

    return function (req, res, next) {

        return next();
    };

};