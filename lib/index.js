var express   = require('express'),
    path      = require('path'),
    router    = require('./router'),
    validator = require('express-validator');

var app = module.exports = exports = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'jade');
app.use(validator());
app.use(express.static(path.join(__dirname, '..', 'public')));

/* Init Routers */
router(app);