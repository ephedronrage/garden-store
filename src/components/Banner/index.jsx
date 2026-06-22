import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

function Banner() {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>Всё для вашего сада</h1>
          <p className={styles.subtitle}>
            Широкий выбор растений, инструментов и декора для сада
          </p>
          <Link to="/products" className={styles.button}>
            Перейти в каталог
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
