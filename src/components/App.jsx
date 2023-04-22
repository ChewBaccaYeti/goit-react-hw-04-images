import { useState, useEffect } from 'react';
import { Searchbar } from './Gallery/Searchbar/Searchbar';
import { GlobalStyle } from './GlobalStyle/GlobalStyle';
import { ImageGallery } from './Gallery/ImageGallery/ImageGallery';
import fetchImages from './Gallery/API/api';
import { LoadMore } from './Gallery/Button/Button';
import { Container } from 'components/App.styled';
import { ModalOverlay } from './Gallery/Modal/Modal';
import { Loader } from './Gallery/Loader/Loader';
import scrollOnLoad from './Gallery/utils/scrollBtnLoad';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') return;

    const getDataImages = async () => {
      try {
        setIsLoading(true);

        const { hits } = await fetchImages(searchQuery, page);

        setImages(prevImages => [...prevImages, ...hits]);

        if (page !== 1) {
          scrollOnLoad();
        }
      } catch (error) {
        // eslint-disable-next-line no-ex-assign
        setError((error = 'Looks like you get an error..:)'));
      } finally {
        setIsLoading(false);
      }
    };
    getDataImages();
  }, [page, searchQuery]);

  const handleClickLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmitSearchQuery = searchQuery => {
    setImages([]);
    setSearchQuery(searchQuery);
    setPage(1);
    setError(null);
  };

  const getLargeImage = largeImage => {
    setLargeImage(largeImage);
    setIsModalOpen(true);
  };

  const toggleShowModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  const lengthImages = images.length >= 12;

  return (
    <Container>
      <Searchbar onSubmit={handleSubmitSearchQuery} />
      {error}
      <ImageGallery items={images} getItemClick={getLargeImage} />
      {isLoading && <Loader />}
      {lengthImages && <LoadMore onLoadMore={() => handleClickLoadMore} />}
      {isModalOpen && (
        <ModalOverlay largeImageURL={largeImage} onClick={toggleShowModal} />
      )}
      <GlobalStyle />
    </Container>
  );
};

export default App;
