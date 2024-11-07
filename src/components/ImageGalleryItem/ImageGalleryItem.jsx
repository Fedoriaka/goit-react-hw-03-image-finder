import styles from './ImageGalleryItem.module.css';
import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
export class ImageGalleryItem extends Component {
  state = {
    isOpen: false,
  };
  OpenModal = () => {
    this.setState({ isOpen: true });
  };
  CloseModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { url } = this.props;
    const { isOpen } = this.state;

    return (
      <li>
        <img
          src={url}
          alt=""
          className={styles.galleryitem}
          onClick={this.OpenModal}
        />

        {isOpen && (
          <Modal
            imageUrl={url}
            altText="Large version"
            onClose={this.CloseModal}
          />
        )}
      </li>
    );
  }
}
