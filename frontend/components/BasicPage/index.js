import React from 'react';
import HeadTitle from '../HeadTitle';
import { cleanHtml } from '../../shared/utils';
import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';
import styles from './styles.css';


const BasicPage = ({ title, body }) => {
  // Format body to:
  // - Remove all links
  let formattedBody = body.value;

  let backgroundImage;
  switch (title) {
    case 'About Us':
      backgroundImage = 'camper';
      break;
    case 'Code of Conduct':
      backgroundImage = 'watertower';
      break;
    case 'Program':
      backgroundImage = 'camper';
      break;
    case 'Visiting Austin':
      backgroundImage = 'watertower';
      break;
    default:
      backgroundImage = 'snake';
      break;
  }
  return (
    <div>
      <HeadTitle title={title} />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header image={backgroundImage} />
        <div className={styles.content}>
          <h1 className={styles.title}>
            {title}
          </h1>
          <div className={styles.detail}>
            <div className={styles.mainContent}>
              {cleanHtml(formattedBody)}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default BasicPage;
