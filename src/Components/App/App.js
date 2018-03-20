/* App.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries and components
 */
import React, { Component } from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import {Playlist} from '../Playlist/Playlist.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {searchResults: [{name: 'Gypsy',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors',
                                   id: 0},
                                  {name: 'Everywhere',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors',
                                   id: 1}
                                 ],
                  playlistName: 'Fleetwood Favs',
                  playlistTracks: [{name: 'Winterwood',
                                    artist: 'Don McClean',
                                    album: 'American Pie',
                                    id: 3},
                                   {name: 'Vincent',
                                    artist: 'Don McClean',
                                    album: 'American Pie',
                                    id: 4}
                                  ]
                  };
    this.addTrack = this.addTrack.bind(this);
  }


  addTrack(track) {
     // use track.id to see if current song is in the list
     // if the track.id is new, add the song to the end of the playlist
     // Set the new state of the playlist
  }

  deleteTrack(track) {

  }

  render() {
    return (
      <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
         <SearchBar />
         <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults} />
           <Playlist playlistName={this.state.playlistName}
                     playlistTracks={this.state.playlistTracks} />
         </div>
       </div>
     </div>
    );
  }
}

export default App;
