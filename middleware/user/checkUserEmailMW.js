var requireOption = require('../common').requireOption;

/**
 * This middleware loads the user and checks the email,
 * if it is ok, sends email and redirect to /login
 * if they are wrong, set error message
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {

        return next();
    };

};