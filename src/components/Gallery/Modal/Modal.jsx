import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Modal, Overlay } from './Modal.styled';

export const ModalOverlay = ({ onClick, largeImageURL }) => {
  useEffect(() => {
    const handleKeyDown = ({ code }) => {
      if (code === 'Escape') onClick();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleClick = ({ target, currentTarget }) => {
    if (target === currentTarget) onClick();
  };

  return (
    <Overlay onClick={handleClick}>
      <Modal>
        <img src={largeImageURL} alt="images" />
      </Modal>
    </Overlay>
  );
};

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
