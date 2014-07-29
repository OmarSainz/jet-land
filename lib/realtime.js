var Twit    = require('twit');
var auth    = require('./auth');
var moment  = require('moment');
var Twitter = new Twit(auth);
var stream  = Twitter.stream('statuses/filter', { 
    track: ['#jetappsio', '#jetapps', '@jetappsio'] 
});

module.exports = function ( io ){
    stream.on('tweet', function ( tweet ) {            
        var date = moment(tweet.created_at).format('MMM DD, YYYY');
        io.sockets.emit('tweet', 
            {               
                name  : tweet.user.screen_name,
                url   : 'https://twitter.com/'+tweet.user.screen_name+'/status/'+tweet.id_str,
                date  : date,
                image : tweet.user.profile_image_url,
                text  : tweet.text
            }
        );      
    });
}