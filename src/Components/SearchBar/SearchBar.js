/* SearchBar.js
   Code for the Codecademy project Jammming
 */

/* Import the React libraries
 */
import React from 'react';
import './SearchBar.css';


export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  search(event) {
    var searchTerm = event.target.value;
    console.log('Search term (in searchResults):'+ searchTerm);

    this.props.onSearch(searchTerm);
  }

  handleTermChange(event) {
    var termValue = event.target.value;

  }

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
