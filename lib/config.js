var osenv = process.env;

var Env = {
    mailChimpListId   : osenv.MAILCHIMP_LIST_ID || '',
    apiKey            : osenv.APIKEY || '',
    consumerKey       : osenv.CONSUMER_KEY || '',
    consumerSecret    : osenv.CONSUMER_SECRET || '',
    accessToken       : osenv.ACCESS_TOKEN || '',
    accessTokenSecret : osenv.ACCESS_TOKEN_SECRET || ''
}

module.exports = Env;
