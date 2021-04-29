import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import api from './services/pixabay-api';

class App extends Component {
  state = {
    pics: [],
    query: '',
  };

  render() {
    return (
      <div className="App">
        <Searchbar />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
