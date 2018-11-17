var requireOption = require('../common').requireOption;

/**
 * Get the vehicle for the vehicleid param
 *  - if there is no such vehicle, redirect to /vehicles
 *  - if there is one, put it on res.tpl.vehicle
 */

module.exports = function (objectrepository) {

    var vehicleModel = requireOption(objectrepository, 'vehicleModel');

    return function (req, res, next) {

        vehicleModel.findOne({
    
        }).populate('_driver').exec(function (err, result) {
          if (err) {
            return next(new Error('Error getting tasks'));
          }
    
          res.tpl.vehicle = result;
          return next();
        });
    };
};
