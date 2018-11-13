var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/taxee');

module.exports = mongoose;