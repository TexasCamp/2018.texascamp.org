// @flow

import React from 'react';
import Link from 'AsyncLink';
import NewsletterForm from 'NewsletterForm';
import withLogic from 'Menu/logic';
import type { MenuT } from 'types';
import styles from './styles.css';
import menuButton from '../../shared/images/menu.png';

type MenuPropsT = {
  isActive: boolean,
  toggleOverlay: Function,
  menuItems: MenuT[],
};
const Menu = ({ isActive, toggleOverlay, menuItems }: MenuPropsT) => {
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
              {menuItems.map(({ label, urlRoute }) =>
                (<li key={label} className={styles.menuItem}>
                  <Link to={urlRoute}>
                    {label}
                  </Link>
                </li>),
              )}
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
