
var requireOption = require('../common').requireOption;

/**
 * Get the vehicle list and put the inventories on res.tpl.vehicles
 */

module.exports = function (objectrepository) {

    var vehicleModel = requireOption(objectrepository, 'vehicleModel');

    return function (req, res, next) {

        vehicleModel.find({
          _driver: req.session.userid
        }, function(err, results){
          if (err) {
            return next(err);
          }
    
          res.tpl.vehicles = results;
          return next();
        });
    };
};