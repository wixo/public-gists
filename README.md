# Public Gists

Fetch public github gists by username and id with no authentication

## Installation

Install via NPM

```
npm install public-gists
```

## Require it

```
var gists = require('public-gists');
```

## Call the API

```
gists.getPublicGistsByUsername( 'wixo', function ( error, result ) {
	if ( error ) {
		throw new Error( 'There was an error', error );
	}
	console.log( 'getPublicGistsByUsername: ', result );
} );

gists.getPublicGistById( 1, function ( error, result ) {
	if ( error ) {
		throw new Error( 'There was an error', error );
	}
	console.log( 'getPublicGistById: ', result );
} );
```

Okthxbye