import React from 'react';
import NewsletterForm from 'NewsletterForm';
import withLogic from 'Menu/logic';
import styles from './styles.css';

const Menu = ({ isActive, toggleOverlay }) => {
  const activeClass = isActive ? styles.active : styles.inactive;
  return (
    <div className={styles.menu}>
      <button
        className={`${styles.menuButton} ${activeClass}`}
        onClick={toggleOverlay}
      >
        Menu
      </button>
      <div className={`${styles.menuOverlay} ${activeClass}`}>
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
    </div>
  );
};

export default withLogic(Menu);
