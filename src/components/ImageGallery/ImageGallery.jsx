import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Loader } from '../Loader/Loader';
import styles from './ImageGallery.module.css';
export const ImageGallery = ({
  images,
  totalImages,
  onLoad,
  isLoading,
  SearchTerm,
}) => {
  return (
    <div>
      {images.length > 0 && (
        <ul className={styles.gallery}>
          {images.map(image => (
            <ImageGalleryItem key={image.id} url={image.webformatURL} />
          ))}
        </ul>
      )}

      {isLoading && <Loader />}

      {images.length > 0 && !isLoading && totalImages > images.length && (
        <Button onClick={onLoad}>Load more</Button>
      )}

      {SearchTerm && totalImages === 0 && !isLoading && (
        <p className={styles.message}>
          Sorry! No images were found. Try another keyword for what you are
          seeking!
        </p>
      )}
    </div>
  );
};
