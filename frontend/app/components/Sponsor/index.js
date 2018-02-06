// @flow

import React from 'react';
import type { SponsorT } from 'types';
import styles from './styles.css';

type SponsorProps = {
  sponsor: SponsorT,
};
const Sponsor = ({
  sponsor: { title, image, sponsorUrl, sponsorLevel },
}: SponsorProps) => {
  const Individual = <p>{`＋ ${title}`}</p>;
  const Company = <img src={image.url} alt={image.alt} />;
  let SponsorEntity = sponsorLevel === 'Individual' ? Individual : Company;
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
