var conf         = require('./config');
var MailChimpAPI = require('mailchimp').MailChimpAPI;

var api = new MailChimpAPI(conf.apiKey, { version: '2.0' });

exports.subscribe = function (email, cb) {
    var subscribe = {
        id     : conf.mailChimpListId,
        apiKey : conf.apiKey,
        email  : email
    };

    api.lists_subscribe(subscribe, cb);
};
