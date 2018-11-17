var Schema = require('mongoose').Schema;
var db = require('../config/db');

var User = db.model('User', {
    name: String,
    email: String,
    password: String
});

// var g = new User();
// g.email = 'fbede4@gmail.com';
// g.password = 'tatatata';
// g.name = 'fulop';
// g.save(function(err){
//     console.log(err);
//     console.log(g);
// })

module.exports = User;