var requireOption = require('../common').requireOption;

/**
 * Create ride if we have the data for it
 * update if we have a res.tpl.inventory, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /vehicles/:vehicleid
 */

module.exports = function (objectrepository) {

    var rideModel = requireOption(objectrepository, 'rideModel');

    //not enough parameter
    return function (req, res, next) {

        if ((typeof req.body.pickup === 'undefined') ||
          (typeof req.body.destination === 'undefined') ||
          (typeof req.body.price === 'undefined') ||
          (typeof req.body.duration === 'undefined') ||
          (typeof req.body.distance === 'undefined')) {
          return next();
        }
    
        var ride = undefined;
        if (typeof res.tpl.ride !== 'undefined') {
            ride = res.tpl.ride;
        } else {
            ride = new rideModel();
        }
        ride.pickup = req.body.pickup;
        ride.destination = req.body.destination;
        ride.price = req.body.price;
        ride.duration = req.body.duration;
        ride.distance = req.body.distance;
        ride.date = Date.now();

        ride.save(function (err, result) {
          if (err) {
            return next(err);
        }
    
          return res.redirect('/rides');
        });
      };

};