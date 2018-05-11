import React from 'react';
import styles from './styles.css';
import twitter from '../../shared/images/twitter.png';
import facebook from '../../shared/images/facebook.png';
import mobileLogo from '../../shared/images/texas-camp-logo-orange.svg';
import logo from '../../shared/images/texas-camp-logo.svg';
import backgroundImage from '../../shared/images/snake.gif';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.backgroundImageWrapper}>
          <img src={backgroundImage} alt="" />
        </div>
        <div className={styles.info}>
          <div>
            May 31-June 2, 2018<span className={styles.separator}>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            </span>Austin, TX
          </div>
          <div>Norris Conference Center</div>
          <div>
            <span className={styles.social}>
              <Twitter />
            </span>
            <span className={styles.separator}>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            </span>
            <span className={styles.social}>
              <Facebook />
            </span>
          </div>
        </div>
        <div className={styles.logo}>
          <a href="/">
            <img
              src={mobileLogo}
              alt="Texas Camp 2018"
              className={styles.mobileLogo}
            />
            <img
              src={logo}
              alt="Texas Camp 2018"
              className={styles.desktopLogo}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

function Twitter() {
  return (
    <a
      className={styles.social_icon}
      href="https://twitter.com/drupaltexascamp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={twitter} alt="twitter" />
    </a>
  );
}

function Facebook() {
  return (
    <a
      className={styles.social_icon}
      href="https://www.facebook.com/DrupalCampTexas/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={facebook} alt="facebook" />
    </a>
  );
}

export default Header;
