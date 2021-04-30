import React, { Component } from 'react';
import api from './services/pixabay-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
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
    fetchLength: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPics();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pics: [],
      fetchLength: '',
    });
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
          fetchLength: pics.length,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  };

  onPicClick = (pic, tags) => {
    this.setState({ showModal: true, largeImg: pic, largeImgTags: tags });
  };

  toggleModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    const {
      pics,
      largeImg,
      largeImgTags,
      showModal,
      isLoading,
      error,
      fetchLength,
    } = this.state;
    const shouldRenderLoadMoreButton =
      pics.length > 0 && fetchLength === 12 && !isLoading;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onChangeQuery} />

        <ImageGallery pics={pics} onClick={this.onPicClick} />

        {isLoading && (
          <Loader className="Loader" color="#3f51b5" type="ThreeDots" />
        )}
        {shouldRenderLoadMoreButton && (
          <button type="button" className="Button" onClick={this.fetchPics}>
            Load more
          </button>
        )}

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
