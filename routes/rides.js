var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');
var updateRideMW = require('../middleware/rides/updateRide');

var getRideListMW = require('../middleware/rides/getRideList');

var rideModel = require('../models/ride');

module.exports = function (app) {

    var objectRepository = {
        rideModel: rideModel
    };

    /**
     * Add new ride
     */
    app.use('/rides/new',
        authMW(objectRepository),
        updateRideMW(objectRepository),
        renderMW(objectRepository, 'newride')
    );

    /**
     * List all rides of a user
     */    
    app.use('/rides',
        authMW(objectRepository),
        getRideListMW(objectRepository),
        renderMW(objectRepository, 'rides')
    );
};