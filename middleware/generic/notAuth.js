/**
 * If the user is logged in, redirects to /vehicles
 */

module.exports = function (objectrepository) {

    return function (req, res, next) {
        return next();
    };

};