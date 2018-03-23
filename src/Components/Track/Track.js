/* Track.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries
 */
import React from 'react';
import './Track.css';


export class Track extends React.Component {
  constructor(props) {
    super(props);

    this.renderAction = this.renderAction.bind(this);
    this.addTrack = this.addTrack.bind(this);
    this.deleteTrack = this.deleteTrack.bind(this);
  }

  renderAction() {
    if(this.props.isRemoval === true) {
      return <a className="Track-action" onClick={this.deleteTrack}>-</a>;
    }
    else {
      return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  deleteTrack() {
    this.props.onDelete(this.props.track);
  }

  render() {

    console.log('Adding track: ' + this.props.track.name);

    return (
      <div className="Track" >
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album} ({this.props.track.id})</p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
