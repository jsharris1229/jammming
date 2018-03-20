/* Playlist.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries
 */
import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList.js';


export class Playlist extends React.Component {

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={'New Playlist'} />
        Current List: {this.props.playlistName}
        <TrackList tracks={this.props.playlistTracks} />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
