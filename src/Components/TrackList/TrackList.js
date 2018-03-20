/* TrackList.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries
 */
import React from 'react';
import './TrackList.css';
import {Track} from '../Track/Track.js';


export class TrackList extends React.Component {

  render() {
    var myTracks = this.props.Tracks;

    return (
      <div className="TrackList">
        {(this.props.tracks === undefined) ? <h3>not found</h3>
           : this.props.tracks.map( (element) => {
              //key = {element.id};
              return <Track track={element} />;
            })
        }  {/* Add a map method that renders a set of Track components */}
      </div>
    );
  }
}

export default TrackList;
