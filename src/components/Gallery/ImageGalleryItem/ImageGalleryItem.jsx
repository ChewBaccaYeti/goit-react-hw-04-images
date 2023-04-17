import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

export const GalleryItem = ({
  item: { webFormatURL, largeImageURL, tags },
  getItemClick,
}) => {
  // Передача оригінального розміру зображення по кліку
  const onClickImage = () => {
    getItemClick(largeImageURL);
  };

  return (
    <Item>
      <Image src={webFormatURL} alt={tags} onClick={onClickImage} />
    </Item>
  );
};

GalleryItem.protoTypes = {
  item: PropTypes.shape({
    webFormatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  getItemClick: PropTypes.func.isRequired,
};
