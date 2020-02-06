var requireOption = require('../common').requireOption;

/**
 * Create ride if we have the data for it
 * update if we have a res.tpl.inventory, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /vehicles/:vehicleid
 */

module.exports = function (objectrepository) {

    var rideModel = requireOption(objectrepository, 'rideModel');
    var UserModel = requireOption(objectrepository, 'userModel');

    //not enough parameter
    return function (req, res, next) {

        if ((typeof req.body.driver === 'undefined') || (typeof req.body.passenger === 'undefined') ||
          (typeof req.body.pickup === 'undefined') ||
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
        UserModel.findOne({
          email: req.body.driver
        }, function (err, result) {
            if ((err) || (!result)) {
                res.tpl.error.push('Invalid driver!');
                return next();
            }
            ride._driver = result._id;
            UserModel.findOne({
                email: req.body.passenger
            }, function (err, result) {
                if ((err) || (!result)) {
                    res.tpl.error.push('Invalid passenger!');
                    return next();
                }
                ride._passenger = result._id;
                ride.save(function (err) {
                    //redirect to /rides
                    return res.redirect('/rides');
                });
            });
        });
    }
};
