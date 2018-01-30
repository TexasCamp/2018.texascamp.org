import React from 'react';
import logo from 'images/texas-camp-logo.png';
import styles from './styles.css';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Texas Camp 2018" />
    </div>
  );
}

export default Logo;
