import React from 'react';
import twitter from 'images/twitter.png';
import facebook from 'images/facebook.png';
import styles from './styles.css';

function Header() {
  return (
    <section className={styles.info}>
      <span className={styles.date}>May 31-June 2, 2018</span>
      <span className={styles.separator}>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
      <span className={styles.location}>Austin TX</span>
      <span className={styles.separator}>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
      <span className={styles.venue}>Norris Conference Center</span>
      <span className={styles.separator}>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
      <span className={styles.social}>
        <Twitter />
      </span>
      <span className={styles.separator}>&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>
      <span className={styles.social}>
        <Facebook />
      </span>
    </section>
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
