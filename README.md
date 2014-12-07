# Public Gists

Fetch public github gists by username and id with no authentication

## Installation

Install via NPM

```
npm install github-api
```

## Require it

```
var gists = require('public-gists');
```

## Call the API

```
gists.getPublicGistsByUsername( 'wixo', function ( result ) {
	console.log( 'Public Gists by username response object: ', JSON.parse( result ) );
} );

gist.getPublicGistById( 1, function ( result ) {
	console.log( 'Public Gist by id response object: ', JSON.parse( result ) );
} );
```

Okthxbye