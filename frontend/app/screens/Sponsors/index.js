// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import Sponsor from 'Sponsor';
import withSponsorsQuery from 'Sponsors/withSponsorsQuery';
import styles from 'Sponsors/styles.css';
import type { SponsorT, SponsorLevelT } from 'types';
import uniq from 'ramda/src/uniq';

type SponsorGroupPropsT = {
  sponsors: SponsorT[],
};
const SponsorsGrouped = ({ sponsors }: SponsorGroupPropsT) => {
  const filterBySponsor = (level: SponsorLevelT): SponsorT[] =>
    sponsors.filter(sponsor => sponsor.sponsorLevel === level);

  // sort existing levels
  const levels: SponsorLevelT[] = uniq(
    sponsors.map(({ sponsorLevel: s }) => s),
  ).sort((a, b) => {
    const ranks = {
      Platinum: 1,
      Gold: 2,
      Silver: 3,
      Individual: 4,
    };
    return ranks[a] - ranks[b];
  });

  return (
    <div className={styles.detail}>
      {levels.map(eachLevel =>
        (<div className={styles.sponsors}>
          <h2>
            {eachLevel}
          </h2>
          {filterBySponsor(eachLevel).map(sponsor =>
            <Sponsor key={sponsor.id} sponsor={sponsor} />,
          )}
        </div>),
      )}
    </div>
  );
};

type SponsorsPropsT = {
  loading: boolean,
  sponsors: SponsorT[],
};
const Sponsors = ({
  loading,
  sponsors,
}: SponsorsPropsT): React.Element<any> | false => {
  return (
    !loading &&
    <div>
      <Helmet title="Sponsors" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>Sponsors</h1>
          <SponsorsGrouped sponsors={sponsors} />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default withSponsorsQuery(Sponsors);
