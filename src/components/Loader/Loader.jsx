import { MagnifyingGlass } from 'react-loader-spinner';
import styles from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={styles.loaderBox}>
      <div className={styles.Searchicon}>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#ffffff"
        />
      </div>
    </div>
  );
};
