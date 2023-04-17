import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ImageGallery } from './Gallery/ImageGallery/ImageGallery';
import { Loader } from './Gallery/Loader/Loader';
import { LoadMore } from './Gallery/Button/Button';
import { Container } from './App.styled';
import { ModalOverlay } from './Gallery/Modal/Modal';
import { Searchbar } from './Gallery/Searchbar/Searchbar';
import scrollOnLoad from './Gallery/utils/scrollBtnLoad';
import fetchImages from './Gallery/API/api';

class App extends Component {
  state = {
    images: [],
    largeImage: '',
    searchQuery: '',
    page: 1,
    isModalOpen: false,
    isLoading: false,
    error: null,
  };

  // Рендер картинки (if state was updated)
  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getDataImages();
    }
  }

  // При submit форми приймає input value і скидує images && pages
  handleSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

  // Беру данні з fetch та записую в state
  getDataImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const { hits } = await fetchImages(searchQuery, page);

      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
      }));

      if (page !== 1) {
        scrollOnLoad();
      }
    } catch (error) {
      this.setState({ error: 'Looks like you get an error..:)' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  // Отримання зображення по кліку і відкриваємо модальне вікно
  getLargeImage = largeImage => {
    this.setState({ largeImage, isModalOpen: true });
  };

  // Повзунок модал. вікна
  toggleShowModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { images, isModalOpen, largeImage, isLoading, error } = this.state;
    const lengthImages = images.length >= 14;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmitSearchQuery} />
        {error}
        <ImageGallery items={images} getItemClick={this.getLargeImage} />
        {isLoading && <Loader />}
        {lengthImages && <LoadMore onLoadMore={() => this.getDataImages} />}
        {isModalOpen && (
          <ModalOverlay
            largeImageURL={largeImage}
            onClick={this.toggleShowModal}
          />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
