var Schema = require('mongoose').Schema;
var db = require('../config/db');

var Review = db.model('Review', {
    date: Date,
    review: String,
    rating: Number,
    _driver: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    _passenger: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Review;