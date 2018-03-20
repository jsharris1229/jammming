/* SearchBar.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries
 */
import React from 'react';
import './SearchBar.css';


export class SearchBar extends React.Component {

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>

    );
  }
};

export default SearchBar;
