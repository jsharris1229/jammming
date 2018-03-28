/* App.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries and components
 */
import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../util/Spotify.js';

/* Define global variables
 */
const spotifyUri = 'spotify:track:';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {searchResults: [{id: '19Ym5Sg0YyOCa6ao21bdoG',
                                   name: 'Gypsy',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors',
                                   uri: ''},
                                  {id: '254bXAqt3zP6P50BdQvEsq',
                                   name: 'Everywhere',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors',
                                   uri: ''},
                                  {id: '254bXAqt3zP6P50BdQvEsr',
                                   name: 'Say You Love Me',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors',
                                   uri: ''},
                                  {id: '254bXAqt3zP6P50BdQvEss',
                                   name: 'Tusk',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors',
                                   uri: ''},
                                  {id: '254bXAqt3zP6P50BdQvEst',
                                   name: 'Gold Dust Woman',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors',
                                   uri: ''}
                                 ],
                  playlistName: 'Fleetwood Favs',
                  playlistTracks: [{id: '2k6wHVi4WetZAHr6liaZbl',
                                    name: 'Winterwood',
                                    artist: 'Don McLean',
                                    album: 'American Pie',
                                    uri: ''},
                                   {id: '0VNzEY1G4GLqcNx5qaaTl6',
                                    name: 'Vincent',
                                    artist: 'Don McLean',
                                    album: 'American Pie',
                                    uri: ''}
                                  ]
                  };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }


  addTrack(track) {
     /* use track.id to see if current song is in the list, if new, add it
        for(1 to length of playlistTracks)
          if (the id to add matches any id in the list)
            set flag to found
            exit loop
        if not found
          add track to end of list
     */
    console.log('In addTrac(): name: ' + track.name);
    console.log('current tracklist: ' + this.state.playlistTracks);

    var maxIndex = this.state.playlistTracks.length;
    var idFound = false;
    var newTrackList = [];

    for(var index=0; index < maxIndex; index++) {
      if(this.state.playlistTracks[index].id === track.id) {
        idFound = true;
        break;
      }
    }
    if(!idFound) {
       newTrackList = this.state.playlistTracks;
       newTrackList.push(track);
       this.setState( {playlistTracks: newTrackList} );
    }
    console.log('New track list: ' + newTrackList);

  }

  removeTrack(track) {
     /* Remove the track passed as an argument
        for(1 to the length of playlistTracks)
          if (track found)
            remove track
            exit loop
      */
    var maxIndex = this.state.playlistTracks.length;
    var newTrackList = this.state.playlistTracks;

    for(var index=0; index < maxIndex; index++) {
      if(this.state.playlistTracks[index].id === track.id) {
        newTrackList.splice(index,1);
        this.setState( {playlistTracks: newTrackList} );
        break;
      }
    }
  }

  updatePlaylistName(newName) {
    console.log('newName: ' + newName);
    console.log('before playlistNAME: ', this.state.playlistName);
    this.setState({playlistName: newName});
    console.log('after playlistNAME: ', this.state.playlistName);
  }

  savePlaylist() {
     /* Generate an array of uri values called trackURIs from the
          playlistTracks property.
        In a later step, you will pass the trackURIs array and playlistName
          to a method that will save the user's playlist to their account.
      */
    var maxIndex = this.state.playlistTracks.length;
    var playlistUriList = [];

    for(var index=0; index < maxIndex; index++) {
      playlistUriList.push(spotifyUri+this.state.playlistTracks[index].id);
      console.log(playlistUriList[index]);
    }
  }

  search(searchTerm) {
    console.log('in App search: ' + searchTerm);

    Spotify.searchSpotify(searchTerm).then(
      newSearchResults => {this.setState( {searchResults: newSearchResults} )}
    );

    console.log(this.state.searchResults);
  }

  render() {

    console.log('searchResults' + this.state.searchResults);
    console.log('playlistTracks: ' + this.state.playlistTracks);

    return (
      <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
         <SearchBar onSearch={this.search}/>
         <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults}
                           onAdd={this.addTrack}
                           onDelete={this.removeTrack} />
           <Playlist playlistName={this.state.playlistName}
                     onNameChange={this.updatePlaylistName}
                     playlistTracks={this.state.playlistTracks}
                     onAdd={this.props.onAdd}
                     onDelete={this.removeTrack}
                     onSave={this.savePlaylist} />
         </div>
       </div>
     </div>
    );
  }
}

export default App;
