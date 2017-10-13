import React from 'react';
import styles from './styles.css';
import logo from '../../shared/images/texas-camp-logo.png';

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logo} alt="Texas Camp 2018" />
    </div>
  );
}

export default Logo;
