/* App.js  - top level, DO NOT USE 
   Code for the Codecademy project Jammming
 */

/* Import the React libraries and components
 */
import React, { Component } from 'react';
import './Components/App/App.css';
import {SearchBar} from '../SearchBar/SearchBar.js';
import {SearchResults} from '../SearchResults/SearchResults.js';
import {Playlist} from '../Playlist/Playlist.js';

class App extends Component {
  constructor(prop) {
    super(props);

    this.state = {searchResults: [{name: 'Gypsy',
                                   artist: 'Fleetwood Mac',
                                   album: 'Rumors'}
                                 ],
                  playlistTracks: [{name: 'Winterwood',
                                   artist: 'Don McClean',
                                   album: 'American Pie'}
                                  ]
                  };
  }

  render() {
    return (
      <div>
       <h1>Ja<span className="highlight">mmm</span>ing</h1>
       <div className="App">
         <SearchBar />
         <div className="App-playlist">
           <SearchResults searchResults={this.state.searchResults} /}
           <Playlist playlistTracks={this.state.playlistTracks} /}
         </div>
       </div>
     </div>
    );
  }
}
