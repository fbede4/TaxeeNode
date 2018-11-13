
var requireOption = require('../common').requireOption;

/**
 * Get the review list of a user and put the inventories on res.tpl.reviews
 */

module.exports = function (objectrepository) {

    var reviewModel = requireOption(objectrepository, 'reviewModel');

    return function (req, res, next) {

        return next();
    };

};