import React, { Component } from 'react';
import api from './services/pixabay-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button/Button';

class App extends Component {
  state = {
    pics: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPics();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, pics: [] });
  };

  fetchPics = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    api
      .fetchPics(options)
      .then(pics => {
        this.setState(prevState => ({
          pics: [...prevState.pics, ...pics],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery pics={this.state.pics} />

        {this.state.pics.length > 0 && <Button onClick={this.fetchPics} />}
      </div>
    );
  }
}

export default App;
