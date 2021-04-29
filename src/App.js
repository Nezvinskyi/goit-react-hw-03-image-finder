import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import api from './services/pixabay-api';

class App extends Component {
  state = {
    pics: [],
    searchQuery: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPics();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };

  fetchPics = () => {
    const { searchQuery } = this.state;
    const options = { searchQuery };
    api.fetchPics(options).then(pics => {
      console.log(pics);
      this.setState({ pics: pics });
    });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery pics={this.state.pics} />
      </div>
    );
  }
}

export default App;
