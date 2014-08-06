var express   = require('express');
var path      = require('path');
var router    = require('./router');
var validator  = require('express-validator');
var bodyParser = require('body-parser');

var app = module.exports = exports = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
app.use(express.static(path.join(__dirname, '..', 'public')));

/* Init Routers */
router(app);
