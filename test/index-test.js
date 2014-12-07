var gist = require('../index');

var username = 'wixo';
var id       = 7076679;

gist.getPublicGistsByUsername( username, function ( result ) {
	console.log( 'getPublicGistsByUsername: ', result );
} );

gist.getPublicGistById( id, function ( result ) {
	console.log( 'getPublicGistById: ', result );
} );