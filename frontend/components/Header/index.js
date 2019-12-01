import React from 'react';
import MediaQuery from 'react-responsive';
import Link from 'next/link';
import styles from './styles.css';

const Header = ({ image = 'snake', isHome }) => {
  let backgroundImage = "/images/header/snake.gif";
  let mobileBackgroundImage = "/images/header/snake.png";
  switch (image) {
    case 'sponsors':
      backgroundImage = "/images/header/sponsors.gif";
      mobileBackgroundImage = "/images/header/sponsors.png";
      break;
    case 'horse':
      backgroundImage = "/images/header/horse.png";
      mobileBackgroundImage = "/images/header/horse-mobile.png";
      break;
    case 'camper':
      backgroundImage = "/images/header/truck.png";
      mobileBackgroundImage = "/images/header/truck-mobile.png";
      break;
    case 'watertower':
      backgroundImage = "/images/header/water-tower.png";
      mobileBackgroundImage = "/images/header/wter-tower-mobile.png";
      break;
    default:
      backgroundImage = "/images/header/snake.gif";
      mobileBackgroundImage = "/images/header/snake.png";
      break;
  }

  return (
    <div className={`${styles.headerWrapper} ${isHome ? 'home' : ''}`}>
      <div className={styles.header}>
        <div className={`${styles.backgroundImageWrapper} ${image}`}>
          <MediaQuery query="(max-width: 959px)">
            <img src={mobileBackgroundImage} alt="" />
          </MediaQuery>
          <MediaQuery query="(min-width: 960px)">
            <img src={backgroundImage} alt="" />
          </MediaQuery>
        </div>
        <div className={styles.info}>
          <div>
            May 31-June 2, 2018<span className={styles.separator}>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            </span>Austin, TX
          </div>
          <div className={styles.venue}>Norris Conference Center</div>
          <div className={styles.socialWrapper}>
            <span className={styles.social}>
              <a
                className={styles.social_icon}
                href="https://twitter.com/drupaltexascamp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/twitter.png" alt="twitter" />
              </a>
            </span>
            <span className={styles.separator}>
              &nbsp;&nbsp;&middot;&nbsp;&nbsp;
            </span>
            <span className={styles.social}>
              <a
                className={styles.social_icon}
                href="https://www.facebook.com/DrupalCampTexas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/facebook.png" alt="facebook" />
              </a>
            </span>
          </div>
        </div>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img
                src="/images/texas-camp-logo.svg"
                alt="Texas Camp 2018"
                className={styles.desktopLogo}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
