
var requireOption = require('../common').requireOption;

/**
 * Get the review list of a user and put the inventories on res.tpl.reviews
 */

module.exports = function (objectrepository) {

    var reviewModel = requireOption(objectrepository, 'reviewModel');

    return function (req, res, next) {

        reviewModel.find({
          _driver: req.session.userid
        }).populate('_passenger').exec(function (err, results) {
          if (err) {
            return next(new Error('Error getting tasks'));
          }
    
          res.tpl.reviews = results;
          return next();
        });
    };

};