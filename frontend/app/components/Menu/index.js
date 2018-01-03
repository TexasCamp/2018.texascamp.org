import React from 'react';
import withLogic from 'Menu/logic';
import styles from './styles.css';

const Menu = ({ isActive, toggleOverlay }) => {
  const activeClass = isActive ? styles.active : styles.inactive;
  return (
    <div className={styles.menu}>
      <button
        className={`${styles.menuButton} ${activeClass}`}
        onClick={toggleOverlay}
      >
        Menu
      </button>
    </div>
  );
};

export default withLogic(Menu);
