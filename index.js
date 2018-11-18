var express = require('express');
var app = express();

var session = require('express-session');
var bodyParser = require('body-parser');

/**
 * Static stuff
 */
app.use(express.static('public'));

app.set('view engine', 'ejs');

/**
 * Session above all
 */
app.use(session({
    secret: 'keyboard cat',
    cookie: {
      maxAge: 9999999
    },
    resave: true,
    saveUninitialized: false
  }));

/**
 * Parse parameters in POST
 */
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
  res.tpl = {};
  res.tpl.error = [];

  return next();
});

/**
 * Routes...
 */
require('./routes/account')(app);
require('./routes/rides')(app);
require('./routes/reviews')(app);
require('./routes/vehicles')(app);

/**
 * Error handler
 */
app.use(function (err, req, res, next) {
    res.status(500).send('Error occured!');
  
    //Flush out the stack to the console
    console.error(err.stack);
  });
  
var server = app.listen(4000, function()
{
    console.log("Listening on port 4000...");
});