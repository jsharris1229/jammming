/* Playlist.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries
 */
import React from 'react';
import './Playlist.css';
import {TrackList} from '../TrackList/TrackList.js';


export class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(element) {
    var passName = element.target.value;
    console.log('In handleNameChange, value: ' + passName);
    this.props.onNameChange(passName);
  }

  render() {
    return (
      <div className="Playlist">
      {console.log('In playlist: '+this.props.playlistName)}
        <input defaultValue={this.props.playlistName} onBlur={this.handleNameChange}/>
        <TrackList tracks={this.props.playlistTracks}
                   isRemoval={true}
                   onAdd={this.props.onAdd}
                   onDelete={this.props.onDelete}
                   listName='playlist' />
        <a className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    );
  }
}

export default Playlist;
