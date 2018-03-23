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

    console.log('Processing tracklist: ' + this.props.listName);

    return (
      <div className="TrackList">
        {/* Add a map method that renders a set of Track components*/}
        {this.props.tracks.map( (element) => {
              //key = {element.id};
              return <Track track={element}
                            key={element.id}
                            isRemoval={this.props.isRemoval}
                            onAdd={this.props.onAdd}
                            onDelete={this.props.onDelete} />;
            })
        }
      </div>
    );
  }
}

export default TrackList;
