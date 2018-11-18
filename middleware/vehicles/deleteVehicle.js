/*
 * delete a vehicle
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {

        if (typeof res.tpl.vehicle === 'undefined') {
          return next();
        }
    
        res.tpl.vehicle.remove(function (err) {
          if (err) {
            return next(err);
          }
    
          //redirect
          res.redirect('/vehicles/');
        });
    };

};