import React from 'react';
import styles from './styles.css';
import twitter from '../../shared/images/twitter.png';
import facebook from '../../shared/images/facebook.png';
import logo from '../../shared/images/texas-camp-logo.svg';
import backgroundImage from '../../shared/images/truck.png';

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.backgroundImageWrapper}>
          <img src={backgroundImage} alt="" />
        </div>
        <section className={styles.info}>
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
        </section>
        <div className={styles.logo}>
          <a href="/">
            <img src={logo} alt="Texas Camp 2018" />
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
