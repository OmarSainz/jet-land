var util = require('util');

exports.validateEmail = function () {
    return function ( request, response, next ) {
        request.assert('email', 'Invalid email param').isEmail();
        var errors = request.validationErrors();

        if ( errors ) {
            response.send('There have been validation errors: ' + util.inspect(errors), 400);
            return;
        }

        next();
    }; 
};
