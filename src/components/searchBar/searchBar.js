import React from 'react';
import './searchBar.css';

const sortByOptions = {
  'Best Match': 'best-match',
  'Highest Rated': 'highest-rated',
  'Most Viewed': 'most-viewed'
};

class SearchBar extends React.Component {
  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return <li key=sortByOptionValue>{sortByOption}</li>;
    });
  }

  render() {
    return (
      <div className="SearchBar">
        div className="SearchBar-sort-options">
          <ul>
            this.renderSortByOptions();
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
