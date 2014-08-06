var middleware = require('./middleware');
var mail       = require('./mail');

module.exports = function (app) {
	app.get('/', function (request, response) {
		response.render('index');
	});

    app.post('/subscribe', middleware.validateEmail(), function (req, res) {
        var obj = { 'email': req.param('email') };

        mail.subscribe(obj, function (err) {
            res.redirect('/');
        });
    });
};
