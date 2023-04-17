import { Component } from 'react';
import { Modal, Overlay } from './Modal.syled';

export class ModalOverlay extends Component {
  // Добавляє слухача натискання клавіши при монтуванні
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Видаляємо слухача натискання клавіши (з window) при розмантуванні
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Закриває модальне вікно при натисканні ESC
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClick}>
        <Modal>
          <img src={this.props.largeImage} alt="" />
        </Modal>
      </Overlay>
    );
  }
}
