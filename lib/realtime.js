//load modules
var fmt    = require('util').format;
var conf   = require('./config');
var Twit   = require('twit');
var moment = require('moment');

//internals
var internals = {};

internals.twit = new Twit({
    consumer_key        : conf.consumerKey,
    consumer_secret     : conf.consumerSecret,
    access_token        : conf.accessToken ,
    access_token_secret : conf.accessTokenSecret
});

internals.stream = internals.twit.stream('statuses/filter', {
    track: ['#jetappsio', '#jetapps', '@jetappsio']
});

module.exports = function ( io ) {

    internals.stream.on('tweet', function ( tweet ) {
        var twitUrl = 'https://twitter.com/%s/status/%s';
        var date    = moment(tweet.created_at).format('MMM DD, YYYY');

        var msg  = {
            name  : tweet.user.screen_name,
            url   : fmt(twitUrl, tweet.user.screen_name, tweet.id_str),
            date  : date,
            image : tweet.user.profile_image_url,
            text  : tweet.text
        };

        io.sockets.emit('tweet', msg);
    });
}
