import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search-bar';
import ReciepeCard from './components/reciepe-card';
import Pager from './components/pager';
import AsyncGet from './utils/async-get';
import _ from 'lodash';
const API_KEY = 'c0834f8d0222935a24636dc95884d301';
const API_ID = '77af4ee5';
const ROOT_URL = 'https://api.edamam.com';
const PAGE_SIZE = 10;


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reciepes: [],
      selectedPage: 1,
      term: 'chicken'
    };

    this.searchTerm(this.state.term);

  }

  searchTerm(term, from = 0, to = PAGE_SIZE) {
    AsyncGet(`${ROOT_URL}/search?q=${term}&app_id=${API_ID}&app_key=${API_KEY}&from=${from}&to=${to}`).then(
      data => { this.setState( {reciepes: data.hits, term: term, selectedPage: to / PAGE_SIZE } )},
      error => {console.log(error)}
    );
  }

  render() {
    const reciepeList = this.state.reciepes.map((reciepe, index) => {
      return <ReciepeCard key={index} reciepe={reciepe} />
    });

    const recipeSearch = _.debounce((term) => {this.searchTerm(term)}, 300);

    return (
      <div>
        <h1 className="header">Great Recipes</h1>
        <SearchBar onSearchTermChanged={recipeSearch} />
        <Pager onPageChanged={selectedPage => {
              this.searchTerm(this.state.term,
                (selectedPage - 1) * PAGE_SIZE,
                PAGE_SIZE * selectedPage
              )
            }
          }
          selectedPage={this.state.selectedPage} />
        <div className="row card-container">
          {reciepeList}
        </div>
        <Pager onPageChanged={selectedPage => {
              this.searchTerm(this.state.term,
                (selectedPage - 1) * PAGE_SIZE,
                PAGE_SIZE * selectedPage
              )
            }
          }
          selectedPage={this.state.selectedPage} />


      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
