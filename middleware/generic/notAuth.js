/**
 * If the user is logged in, redirects to /vehicles
 */

module.exports = function (objectrepository) {

  return function (req, res, next) {
    if (typeof req.session.userid !== 'undefined') {
      return res.redirect('/rides');
    }
    return next();
  };
};