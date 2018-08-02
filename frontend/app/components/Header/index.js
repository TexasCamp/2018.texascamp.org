import React from 'react';
import MediaQuery from 'react-responsive';
import styles from './styles.css';
import twitter from '../../shared/images/twitter.png';
import facebook from '../../shared/images/facebook.png';
import logo from '../../shared/images/texas-camp-logo.svg';
import snake from '../../shared/images/header/snake.gif';
import snakeMobile from '../../shared/images/header/snake.png';
import horse from '../../shared/images/header/horse.png';
import horseMobile from '../../shared/images/header/horse-mobile.png';
import camper from '../../shared/images/header/truck.png';
import camperMobile from '../../shared/images/header/truck-mobile.png';
import watertower from '../../shared/images/header/water-tower.png';
import watertowerMobile from '../../shared/images/header/water-tower-mobile.png';
import sponsors from '../../shared/images/header/sponsors.gif';
import sponsorsMobile from '../../shared/images/header/sponsors.png';

const Header = ({ image = 'snake', isHome }) => {
  let backgroundImage = snake;
  let mobileBackgroundImage = snakeMobile;
  switch (image) {
    case 'sponsors':
      backgroundImage = sponsors;
      mobileBackgroundImage = sponsorsMobile;
      break;
    case 'horse':
      backgroundImage = horse;
      mobileBackgroundImage = horseMobile;
      break;
    case 'camper':
      backgroundImage = camper;
      mobileBackgroundImage = camperMobile;
      break;
    case 'watertower':
      backgroundImage = watertower;
      mobileBackgroundImage = watertowerMobile;
      break;
    default:
      backgroundImage = snake;
      mobileBackgroundImage = snakeMobile;
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
              src={logo}
              alt="Texas Camp 2018"
              className={styles.desktopLogo}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

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
