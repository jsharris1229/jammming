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

  search(searchTerm) {
    //var searchTerm = event.target.value;
    console.log('Search term (in searchBar: '+ searchTerm);

    this.props.onSearch(searchTerm);
  }

  handleTermChange(event) {
    var termValue = event.target.value;
    console.log('In handleTermChange, value: ' + termValue);
    
    this.search(termValue);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist"
               onBlur={this.handleTermChange} />
        <a>SEARCH</a>
      </div>

    );
  }
};

export default SearchBar;
