var requireOption = require('../common').requireOption;

/**
 * Create review if we have the data for it
 * update if we have a res.tpl.inventory, create if we don't have
 *  - if there is no title, set tpl.error
 *  - if everything is ok redirect to /vehicles/:vehicleid
 */

module.exports = function (objectrepository) {

    var reviewModel = requireOption(objectrepository, 'reviewModel');
    var UserModel = requireOption(objectrepository, 'userModel');

    return function (req, res, next) {

        //not enough parameter
        if ((typeof req.body.driver === 'undefined') || (typeof req.body.passenger === 'undefined') ||
          (typeof req.body.rating === 'undefined') || (typeof req.body.review === 'undefined')) {
          return next();
        }

        var review = new reviewModel();
        
        review.rating = req.body.rating;
        review.review = req.body.review;
        review.date = Date.now();
        UserModel.findOne({
            email: req.body.driver
        }, function (err, result) {
            if ((err) || (!result)) {
                res.tpl.error.push('Invalid driver!');
                return next();
            }
            review._driver = result._id;
            UserModel.findOne({
                email: req.body.passenger
            }, function (err, result) {
                if ((err) || (!result)) {
                    res.tpl.error.push('Invalid passenger!');
                    return next();
                }
                review._passenger = result._id;
                review.save(function (err) {
                    //redirect to /reviews
                    return res.redirect('/reviews');
                });
            });
        });
    };
};