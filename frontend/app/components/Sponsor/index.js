// @flow

import React from 'react';
import type { SponsorT } from 'types';
import styles from './styles.css';

type SponsorPropsT = {
  sponsor: SponsorT,
};
const Sponsor = ({ sponsor: { title, image, sponsorUrl } }: SponsorPropsT) => {
  const noUrlIncluded = !image.url;
  const SponsorWithTitleOnly = (
    <p>
      {title}
    </p>
  );
  const SponsorWithImage = (
    <img className={styles.sponsorImage} src={image.url} alt={image.alt} />
  );
  // if image is not included, render title only.
  let SponsorEntity = noUrlIncluded ? SponsorWithTitleOnly : SponsorWithImage;
  // if sponsor has url, wrap with link
  if (sponsorUrl) {
    SponsorEntity = (
      <a href={sponsorUrl}>
        {SponsorEntity}
      </a>
    );
  }
  return (
    <div className={styles.sponsorWrapper}>
      {SponsorEntity};
    </div>
  );
};

export default Sponsor;
