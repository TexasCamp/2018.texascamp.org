import React from 'react';
import styles from './styles.css';
import horizon from '../../shared/images/horizon.png';
import van from '../../shared/images/van.png';
import cow from '../../shared/images/cow.png';

class BackgroundImage extends React.Component {
  componentDidMount() {
    if (global.window) {
      global.window.addEventListener('mousemove', this.updatePosition, false);
    }
  }
  updatePosition = e => {
    if (!this.resizeTimeout) {
      this.resizeTimeout = setTimeout(() => {
        this.resizeTimeout = null;
        const getYFromCenter = e.view.innerHeight / 2 - e.clientY;
        const getXFromCenter = e.view.innerWidth / 2 - e.clientX;
        if (global.document) {
          if (global.document.getElementById('horizon')) {
            global.document.getElementById('horizon').style.top = `${0.015 *
              getYFromCenter}px`;
            global.document.getElementById(
              'horizon',
            ).style.marginLeft = `${0.015 * getXFromCenter}px`;
          }
          if (global.document.getElementById('cow')) {
            global.document.getElementById('cow').style.top = `${0.005 *
              getYFromCenter}px`;
            global.document.getElementById('cow').style.marginLeft = `${0.005 *
              getXFromCenter}px`;
          }
        }
      }, 75);
    }
  };
  render() {
    return (
      <div className={styles.backgroundWrapper}>
        <div className={styles.horizon}>
          <img
            className={styles.backgroundImage}
            src={horizon}
            alt=""
            id="horizon"
          />
        </div>
        <div className={styles.van}>
          <img className={styles.backgroundImage} src={van} alt="" />
        </div>
        <div className={styles.cow}>
          <img className={styles.backgroundImage} src={cow} alt="" id="cow" />
        </div>
      </div>
    );
  }
}
export default BackgroundImage;
