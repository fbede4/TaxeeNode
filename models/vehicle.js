var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Vehicle = db.model('Vehicle', {
    licencePlate: String,
    brand: String,
    type: String,
    colour: String,
    yearOfManufacture: Number,
    _driver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports = Vehicle;