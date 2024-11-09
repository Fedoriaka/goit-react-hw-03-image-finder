import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
 const BASE_URL = 'https://pixabay.com/api/';
 const API_KEY = '46254604-623035f39894a833efa0483b4';


export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      SearchTerm: '',
      page: 1,
      perPage: 12,
      totalImages: 0,
      isLoading: false,
    };
  }
  componentDidUpdate = (prevProps, prevState) => {
    if (
      this.state.SearchTerm !== prevState.SearchTerm ||
      this.state.page !== prevState.page
    ) {
      this.handlefetch();
    }
  };
  handlefetch = () => {
   
 const url = `${BASE_URL}?key=${API_KEY}&q=${this.state.SearchTerm}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.state.perPage}&page=${this.state.page}`;
 this.setState({ isLoading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
          totalImages: data.total,
          isLoading: false,
        }));
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        this.setState({ isLoading: false });
      });
  };
  handleSearchSubmit = inputValue => {
    this.setState({ SearchTerm: inputValue, images: [], page: 1 });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    const { images, totalImages, isLoading, SearchTerm } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery
          images={images}
          totalImages={totalImages}
          isLoading={isLoading}
          SearchTerm={SearchTerm}
          onLoad={this.handleLoadMore}
        />
      </div>
    );
  }
}
