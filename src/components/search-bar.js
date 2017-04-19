import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  handleChange(term) {
    this.setState({term});
    this.props.onSearchTermChanged(term);
  }

  render() {
    return (
      <div className="search-box">
      <input
        value={this.state.term}
        onChange={event => this.handleChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
