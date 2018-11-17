
var requireOption = require('../common').requireOption;

/**
 * Get the ride list of a user and put the inventories on res.tpl.rides
 */

module.exports = function (objectrepository) {

    var rideModel = requireOption(objectrepository, 'rideModel');

    return function (req, res, next) {

        rideModel.find({
          _driver: req.session.userid
        }).populate('_passenger').exec(function (err, results) {
          if (err) {
            return next(new Error('Error getting tasks'));
          }
    
          res.tpl.rides = results;
          return next();
        });
    };

};