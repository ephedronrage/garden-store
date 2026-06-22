import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Контакты</h3>
            <p>+7 (999) 123-45-67</p>
            <p>info@garden-store.ru</p>
            <p>г. Москва, ул. Садовая, 1</p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Информация</h3>
            <p>О компании</p>
            <p>Доставка и оплата</p>
            <p>Возврат товара</p>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerTitle}>Каталог</h3>
            <p>Садовый инструмент</p>
            <p>Растения</p>
            <p>Удобрения</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2024 Garden Store. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
