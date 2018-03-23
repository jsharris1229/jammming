/* SearchResults.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries
 */
import React from 'react';
import './SearchResults.css';
import {TrackList} from '../TrackList/TrackList.js';

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults}
                   isRemoval={false}
                   onAdd={this.props.onAdd}
                   onDelete={this.props.onDelete}
                   listName='Search' />
      </div>
    );
  }
}

export default SearchResults;
