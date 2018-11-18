var authMW = require('../middleware/generic/auth');
var renderMW = require('../middleware/generic/render');

var getVehicleListMW = require('../middleware/vehicles/getVehicleList');
var updateVeicleMW = require('../middleware/vehicles/updateVehicle');
var getVehicleMW = require('../middleware/vehicles/getVehicle');
var deleteVehicleMW = require('../middleware/vehicles/deleteVehicle');
var vehicleModel = require('../models/vehicle');
var userModel = require('../models/user');

module.exports = function (app) {

    var objectRepository = {
        vehicleModel: vehicleModel,
        userModel: userModel
    };

    /**
     * Add new vehicle
     */
    app.use('/vehicles/new',
        authMW(objectRepository),
        updateVeicleMW(objectRepository),
        renderMW(objectRepository, 'newvehicle')
    );

    /**
     * Edit the vehicle details
     */
    app.use('/vehicles/:vehicleid/edit',
        authMW(objectRepository),
        getVehicleMW(objectRepository),
        updateVeicleMW(objectRepository),
        renderMW(objectRepository, 'newvehicle')
    );

    /**
     * Delete vehicle
     * - then redirect to /vehicles
     */
    app.use('/vehicles/:vehicleid/delete',
        authMW(objectRepository),
        getVehicleMW(objectRepository),
        deleteVehicleMW(objectRepository),
        function (req, res, next) {
            return res.redirect('/vehicles');
        }
    );

    /**
    * List all vehicles
    */
    app.use('/vehicles',
        authMW(objectRepository),
        getVehicleListMW(objectRepository),
        renderMW(objectRepository, 'vehicles')
    );
};