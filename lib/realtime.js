var Twit    = require('twit');
var auth    = require('./auth');
var Twitter = new Twit(auth);
var stream  = Twitter.stream('statuses/filter', { 
    track: ['#jetappsio', '#jetapps', '@jetappsio'] 
});

module.exports = function ( io ){
    stream.on('tweet', function ( tweet ) {            
        io.sockets.emit('tweet', 
            {               
                name  : tweet.user.screen_name,
                url   : 'https://twitter.com/'+tweet.user.screen_name+'/status/'+tweet.id_str,
                date  : tweet.created_at,
                image : tweet.user.profile_image_url,
                text  : tweet.text
            }
        );      
    });
}