import React from 'react';
import styles from './styles.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.sponsors}>
        <p>Platinum Sponsors</p>
      </div>
      <div className={styles.credits}>
        Built by Amazee Labs with Drupal+React and hosted on amazee.io.
      </div>
    </div>
  );
}

export default Footer;
