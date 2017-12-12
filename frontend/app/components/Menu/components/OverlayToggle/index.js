import React from 'react';
import withLogic from 'OverlayToggle/logic';
import styles from './styles.css';

const OverlayToggle = ({ isActive, toggleOverlay }) => {
  const activeClass = isActive ? styles.active : styles.inactive;
  return (
    <div className={styles.overlayButton}>
      <button className={activeClass} onClick={toggleOverlay}>
        Toggle
      </button>
    </div>
  );
};

export default withLogic(OverlayToggle);
