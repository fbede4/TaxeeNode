var notAuthMW = require('../middleware/generic/notAuth');
var checkUserLoginMW = require('../middleware/user/checkUserLogin');
var checkUserRegistrationMW = require('../middleware/user/checkUserRegistration');
var checkUserEmailMW = require('../middleware/user/checkUserEmailMW');
var renderMW = require('../middleware/generic/render');
var logoutMW = require('../middleware/generic/logout');
var mainRedirectMW = require('../middleware/generic/mainredirect');
var userModel = require('../models/user');

module.exports = function (app) {

  var objectRepository = {
    userModel: userModel
  };

    /**
     * Main page
     */
    app.get('/',
        mainRedirectMW(objectRepository)
    );

  /**
   * Login page (Main)
   */
  app.use('/login',
    notAuthMW(objectRepository),
    checkUserLoginMW(objectRepository),
    renderMW(objectRepository, 'login')
  );

  /**
   * Log out
   */
  app.get('/logout',
    logoutMW(objectRepository),
    function(req, res, next){
      res.redirect('/login');
    }
  );

  /**
   * Registration
   */
  app.use('/register',
    notAuthMW(objectRepository),
    checkUserRegistrationMW(objectRepository),
    renderMW(objectRepository, 'register')
  );

    /**
   * Reset Password
   */
  app.use('/passwordreset',
    notAuthMW(objectRepository),
    checkUserEmailMW(objectRepository),
    renderMW(objectRepository, 'passwordreset')
  );

};