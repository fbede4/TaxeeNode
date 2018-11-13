var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Ride = db.model('Ride', {
    pickup: String,
    destination: String,
    date: Date,
    price: Number,
    distance: Number,
    duration: Number,
    _driver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _passenger: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Ride;