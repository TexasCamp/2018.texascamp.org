// @flow

import React from 'react';
import type { SponsorT } from 'types';
import styles from './styles.css';

type SponsorPropsT = {
  sponsor: SponsorT,
};
const Sponsor = ({ sponsor: { title, image, sponsorUrl } }: SponsorPropsT) => {
  const noLogoAvailable = !image.url;
  const SponsorWithTitleOnly = (
    <p>
      {title}
    </p>
  );
  const titleOnlyClass = noLogoAvailable ? styles.noImage : '';
  const SponsorWithLogo = (
    <img className={styles.sponsorImage} src={image.url} alt={image.alt} />
  );
  // if image is not included, render title only.
  let SponsorEntity = noLogoAvailable ? SponsorWithTitleOnly : SponsorWithLogo;
  // if sponsor has url, wrap with link
  if (sponsorUrl) {
    SponsorEntity = (
      <a href={sponsorUrl}>
        {SponsorEntity}
      </a>
    );
  }
  return (
    <div className={titleOnlyClass}>
      {SponsorEntity}
    </div>
  );
};

export default Sponsor;
