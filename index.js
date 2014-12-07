var request = require('request');

var url = 'https://api.github.com/';
var headers = { 'User-Agent': 'public-gist'
              , 'Access-Control-Allow-Origin': '*'
              , 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS'
              , 'Access-Control-Allow-Headers': 'Authorization, Content-Type, If-Match, If-Modified-Since, If-None-Match, If-Unmodified-Since, X-GitHub-OTP, X-Requested-With'
              , 'Access-Control-Expose-Headers': 'ETag, Link, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval'
              , 'Access-Control-Max-Age': '86400'
              , 'Access-Control-Allow-Credentials': 'true'
              , 'content-type': 'application/json'
              }

var createPublicGistsRequestObj = function ( username ) {
	return { url: url + 'users/' + username + '/gists'
	       , headers: headers
	       }
};

var createPublicGistRequestObj = function ( id ) {
	return { url: url + 'gists/' + id
	       , headers: headers
	       }
}

var getPublicGistsByUsername = function ( username, cb ) {
	request( createPublicGistsRequestObj( username ), function ( error, response, body ) {
		if ( error ) {
			throw new Error( body.message );
		}
		if ( !error && response.statusCode === 200 ) {
			cb( body );
		}
	} );
};

var getPublicGistById = function ( id, cb ) {
	request( createPublicGistRequestObj( id ), function ( error, response, body ) {
		if ( error ) {
			throw new Error( body.message );
		}
		if ( !error && response.statusCode === 200 ) {
			cb( body );
		}
	} );
};

var gist = { getPublicGistsByUsername : getPublicGistsByUsername
           , getPublicGistById        : getPublicGistById
           };

module.exports = gist;