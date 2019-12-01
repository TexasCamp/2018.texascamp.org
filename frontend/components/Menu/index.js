import React from 'react';
import Link from 'next/link';
import NewsletterForm from '../NewsletterForm';
import withLogic from './logic';
import styles from './styles.css';

const Menu = ({ isActive, toggleOverlay, menuItems }) => {
  const activeClass = isActive ? styles.active : styles.inactive;
  return (
    <div>
      <button
        className={`${styles.menuButton} ${activeClass}`}
        onClick={toggleOverlay}
        tabIndex="0"
      >
        <img
          className={styles.menuButtonImage}
          src="/images/menu.png"
          alt="Menu"
          id="menu"
        />
        <span className={styles.diagonalTopLine} />
        <span className={styles.diagonalBottomLine} />
      </button>

      <div className={`${styles.menuOverlay} ${activeClass}`}>
        <div className={styles.menuOverlayContainer}>
          <nav className={styles.siteNavigation}>
            <ul className={styles.menu}>
              {menuItems.map(({ label, urlRoute }) =>
                (<li key={label} className={styles.menuItem}>
                  <Link href={urlRoute}>
                    <a>{label}</a>
                  </Link>
                </li>),
              )}
              <li className={styles.menuItemSmall}>
                <Link href={'code-conduct'}>
                  <a>Code of Conduct</a>
                </Link>
              </li>
              <li className={styles.menuItemSmall}>
                <a href="mailto:hello@texascamp.org">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.newsletterContainer}>
            <span className={styles.newsletterLine} />
            <div className={styles.newsletterForm}>
              <NewsletterForm closeMenuOverlay={toggleOverlay} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLogic(Menu);
