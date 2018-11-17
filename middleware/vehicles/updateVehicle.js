var requireOption = require('../common').requireOption;

/**
 * Create (or update) vehicle if we have the data for it
 * update if we have a res.tpl.inventory, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /vehicles
 */

module.exports = function (objectrepository) {

    var vehicleModel = requireOption(objectrepository, 'vehicleModel');
    var userModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {
        if ((typeof req.body.plate === 'undefined') ||
        (typeof req.body.type === 'undefined') ||
        (typeof req.body.colour === 'undefined') ||
        (typeof req.body.year === 'undefined') ||
        (typeof req.body.brand === 'undefined')) {
        return next();
        }
  
        var vehicle = undefined;
        if (typeof res.tpl.vehicle !== 'undefined') {
            vehicle = res.tpl.vehicle;
            vehicle.licencePlate = req.body.plate;
            vehicle.type = req.body.type;
            vehicle.colour = req.body.colour;
            vehicle.brand = req.body.brand;
            vehicle.yearOfManufacture = req.body.year;
            vehicle.save(function (err) {
                //redirect to /vehicles
                return res.redirect('/vehicles');
            });
        } else {
            vehicle = new vehicleModel();
            vehicle.licencePlate = req.body.plate;
            vehicle.type = req.body.type;
            vehicle.colour = req.body.colour;
            vehicle.brand = req.body.brand;
            vehicle.yearOfManufacture = req.body.year;
            userModel.findById(req.session.userid, function (err, me) {
                vehicle._driver = me;
                vehicle.save(function (err) {
                    //redirect to /vehicles
                    return res.redirect('/vehicles');
                });
            });
        }
    };
};