import React from 'react';
import NewsletterForm from 'NewsletterForm';
import withLogic from 'Menu/logic';
import styles from './styles.css';

const Menu = ({ isActive, toggleOverlay }) => {
  const activeClass = isActive ? styles.active : styles.inactive;
  return (
    <div>
      <div
        className={`${styles.menuButton} ${activeClass}`}
        onClick={toggleOverlay}
        role="button"
        tabIndex="0"
      >
        Me<wbr />nu
      </div>

      <div className={`${styles.menuOverlay} ${activeClass}`}>
        <div className={styles.menuOverlayContainer}>
          <nav className={styles.siteNavigation}>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <a href="">Home</a>
              </li>
              <li className={styles.menuItem}>
                <a href="">Speak</a>
              </li>
              <li className={styles.menuItem}>
                <a href="">Sponsor</a>
              </li>
              <li className={styles.menuItem}>
                <a href="">Venue</a>
              </li>
              <li className={styles.menuItem}>
                <a href="">News</a>
              </li>
              <li className={styles.menuItemSmall}>
                <a href="">Code of Conduct</a>
              </li>
              <li className={styles.menuItemSmall}>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={styles.newsletterContainer}>
            <span className={styles.newsletterLine} />
            <div className={styles.newsletterForm}>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLogic(Menu);
