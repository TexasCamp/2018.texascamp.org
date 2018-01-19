import React from 'react';
import { Link } from 'react-router-dom';
import NewsletterForm from 'NewsletterForm';
import prospectus from '!file-loader?name=TexasCamp_2018_Sponsor_Prospectus_[hash].[ext]!documents/prospectus.pdf';
import withLogic from 'Menu/logic';
import styles from './styles.css';
import menuButton from '../../shared/images/menu.png';

const Menu = ({ isActive, toggleOverlay }) => {
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
          src={menuButton}
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
              <li className={styles.menuItem}>
                <Link to="/home">Home</Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/session-form">Speak</Link>
              </li>
              <li className={styles.menuItem}>
                <a href={prospectus}>Sponsor</a>
              </li>
              <li className={styles.menuItem}>
                <Link to="/news/the-norris-conference-centers-north-austin">
                  Venue
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link to="/news">News</Link>
              </li>
              <li className={styles.menuItemSmall}>
                <Link to="/code-of-conduct">Code of Conduct</Link>
              </li>
              <li className={styles.menuItemSmall}>
                <Link to="/contact">Contact</Link>
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
