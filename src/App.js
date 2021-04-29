import React, { Component } from 'react';
import api from './services/pixabay-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal';
import Loader from 'react-loader-spinner';

class App extends Component {
  state = {
    pics: [],
    searchQuery: '',
    currentPage: 1,
    error: null,
    showModal: false,
    largeImg: '',
    largeImgTags: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPics();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, currentPage: 1, pics: [] });
  };

  fetchPics = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    api
      .fetchPics(options)
      .then(pics => {
        this.setState(prevState => ({
          pics: [...prevState.pics, ...pics],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  onPicClick = (pic, tags) => {
    this.setState({ showModal: true, largeImg: pic, largeImgTags: tags });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const {
      pics,
      largeImg,
      largeImgTags,
      showModal,
      isLoading,
      error,
    } = this.state;
    const shouldRenderLoadMoreButton = pics.length > 0 && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery pics={pics} onClick={this.onPicClick} />

        {isLoading && (
          <Loader className="Loader" color="#3f51b5" type="ThreeDots" />
        )}
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchPics} />}

        {error && (
          <p style={{ textAlign: 'center' }}>
            Something went wrong. Please try again.
          </p>
        )}

        {showModal && (
          <Modal url={largeImg} alt={largeImgTags} onClose={this.toggleModal} />
        )}
      </div>
    );
  }
}

export default App;
