var gist = require('../index');

var username = 'wixo';
var id       = 7076679;

gist.getPublicGistsByUsername( username, function ( error, result ) {
	if ( error ) {
		throw new Error( 'There was an error', error );
	}
	console.log( 'getPublicGistsByUsername: ', result );
} );

gist.getPublicGistById( id, function ( error, result ) {
	if ( error ) {
		throw new Error( 'There was an error', error );
	}
	console.log( 'getPublicGistById: ', result );
} );