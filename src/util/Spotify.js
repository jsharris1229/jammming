/* Spotify.js
*/
import React from 'react';

var userAccessToken = '';
var userAccessTokenExpiresIn = 0;

var implicitEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = '';
var implicitResponseType = 'token';
const implicitRedirectUri = 'http://localhost:3000/';
var implicitState = generateStateString(16); /* Set to random string or hash for security */
var implicitScope = 'playlist-read-private playlist-modify-private playlist-modify-public streaming';

/*  Implicit Grant request
    var implicitEndpoint = 'https://accounts.spotify.com/authorize';
    example:
      https://accounts.spotify.com/authorize
            ?client_id=5fe01282e94241328a84e7c5cc169164
            &redirect_uri=http:%2F%2Fexample.com%2Fcallback
            &scope=user-read-private%20user-read-email
            &response_type=token
            &state=123
*/
var completeImplictEndpoint = implicitEndpoint + '?client_id=' + clientId +
       '&redirect_uri=' + implicitRedirectUri +
       '&scope=' + implicitScope +
       '&response_type=' + implicitResponseType +
       '&state=' + implicitState;

/* Playlist endpoint example:
var playlistUrla = 'https://accounts.spotify.com/authorize\
         ?client_id=CLIENT_ID\
         &response_type=token\
         &scope=playlist-modify-public\
         &redirect_uri=REDIRECT_URI';
*/
const returnCodes = [
{code: 200,	text:	'OK - Request succeeded. The client can read the result of the request in the body and the headers of the response.'},
{code: 201,	text:	'Created - request was fulfilled and resulted in a new resource being created.'},
{code: 202,	text:	'Accepted - request was accepted for processing, but the processing has not been completed.'},
{code: 204,	text:	'No Content - Request succeeded but returns no message body.'},
{code: 304,	text:	'Not Modified. See Conditional requests.'},
{code: 400,	text:	'Bad Request - Request could not be understood by the server due to malformed syntax. The message body will contain more information; see Error Details.'},
{code: 401,	text:	'Unauthorized - Request requires user authentication or, if the request included authorization credentials, authorization has been refused for those credentials.'},
{code: 403,	text:	'Forbidden - Server understood the request, but is refusing to fulfill it.'},
{code: 404,	text:	'Not Found - Requested resource could not be found. This error can be due to a temporary or permanent condition.'},
{code: 429,	text:	'Too Many Requests - Rate limiting has been applied.'},
{code: 500,	text:	'Internal Server Error. Please report this to Spotify through a comment at the bottom of the error code.'},
{code: 502,	text:	'Bad Gateway - Server was acting as a gateway or proxy and received an invalid response from the upstream server.'},
{code: 503,	text: 'Service Unavailable - Server is currently unable to handle the request due to a temporary condition. You can choose to resend the request again.'}
]

function generateStateString(length) {
  var stateString = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var index = 0; index < length; index++)
    stateString += possible.charAt(Math.floor(Math.random() * possible.length));

  console.log('generated state: ' + stateString);
  return stateString;
}



const Spotify = {

  getAccessToken() {

    if(userAccessToken !== '') {
      return userAccessToken;
    }
    /* If the access token and expiration time are in the URL, implement the
       following steps:

        - Set the access token value
        - Set a variable for expiration time
        - Set the access token to expire at the value for expiration time

      Clear the parameters from the URL, so the app doesnt try grabbing the
        access token after it has expired
    */
    else if (window.location.href.match(/access_token=([^&]*)/) &&
		         window.location.href.match(/expires_in=([^&]*)/)) {
			userAccessToken = window.location.href.match(/access_token=([^&]*)/)[1];
			userAccessTokenExpiresIn = window.location.href.match(/expires_in=([^&]*)/)[1];

			window.setTimeout(() => userAccessToken = '', userAccessTokenExpiresIn * 1000);
			window.history.pushState('Access Token', null, '/');

      return userAccessToken;
    }
    else {
		  window.location = completeImplictEndpoint;
    }
  },

  searchSpotify(searchTerm) {
    console.log('Inside Spotify.search()');

    if (userAccessToken.length === 0){
      Spotify.getAccessToken();
    }

    const accessToken = userAccessToken;

    /* Search using the track endpoint */
    return fetch('https://api.spotify.com/v1/search?type=track&q=' + searchTerm, {
			  	   headers: { Authorization: `Bearer ${accessToken}`
				     }

	    }).then(response => {
				return response.json();

		  }).then(jsonResponse => {
				if (!jsonResponse.tracks) {
						return [];
				}
        /* return separate track data */
				return jsonResponse.tracks.items.map(track => ({
						id: track.id,
						name: track.name,
						artist: track.artists[0].name,
						album: track.album.name,
						uri: track.uri
				}));
		});

  }

}

export default Spotify;
