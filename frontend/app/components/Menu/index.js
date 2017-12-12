import React from 'react';
import NewsletterForm from 'NewsletterForm';
import styles from './styles.css';

function Menu() {
  return (
    <div className={styles.overlayMenu}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <a>Home</a>
          </li>
          <li className={styles.menuItem}>
            <a>Speak</a>
          </li>
          <li className={styles.menuItem}>
            <a>Sponsor</a>
          </li>
          <li className={styles.menuItem}>
            <a>Venue</a>
          </li>
          <li className={styles.menuItem}>
            <a>News</a>
          </li>
          <li className={styles.menuItemSmall}>
            <a>Code of Conduct</a>
          </li>
          <li className={styles.menuItemSmall}>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <NewsletterForm />
    </div>
  );
}

export default Menu;
