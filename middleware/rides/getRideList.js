
var requireOption = require('../common').requireOption;

/**
 * Get the ride list of a user and put the inventories on res.tpl.rides
 */

module.exports = function (objectrepository) {

    var rideModel = requireOption(objectrepository, 'rideModel');

    return function (req, res, next) {

        return next();
    };

};