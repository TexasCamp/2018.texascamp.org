// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import Sponsor from 'Sponsor';
import withSponsorsQuery from 'Sponsors/withSponsorsQuery';
import styles from 'Sponsors/styles.css';

const Sponsors = ({
  loading,
  sponsors,
}: SponsorsProps): React.Element<any> | null => {
  const platimumSponsors = sponsors.filter(
    sponsor => sponsor.sponsorLevel === 'Platinum',
  );
  const goldSponsors = sponsors.filter(
    sponsor => sponsor.sponsorLevel === 'Gold',
  );
  const silverSponsors = sponsors.filter(
    sponsor => sponsor.sponsorLevel === 'Silver',
  );
  const bronzeSponsors = sponsors.filter(
    sponsor => sponsor.sponsorLevel === 'Bronze',
  );
  const individualSponsors = sponsors.filter(
    sponsor => sponsor.sponsorLevel === 'Individual',
  );
  return (
    (!loading &&
      <div>
        <Helmet title="Sponsors" />
        <Menu />
        <div className={styles.contentWrapper}>
          <Header />
          <div className={styles.content}>
            <h1 className={styles.title}>Sponsors</h1>
            <div className={styles.detail}>
              {(platimumSponsors.length &&
                <div className={styles.sponsors}>
                  <h2>Platinum</h2>
                  {platimumSponsors.map(sponsor =>
                    <Sponsor key={sponsor.id} sponsor={sponsor} />,
                  )}
                </div>) ||
                null}
              {(goldSponsors.length &&
                <div className={styles.sponsors}>
                  <h2>Gold</h2>
                  {goldSponsors.map(sponsor =>
                    <Sponsor key={sponsor.id} sponsor={sponsor} />,
                  )}
                </div>) ||
                null}
              {(silverSponsors.length &&
                <div className={styles.sponsors}>
                  <h2>Silver</h2>
                  {silverSponsors.map(sponsor =>
                    <Sponsor key={sponsor.id} sponsor={sponsor} />,
                  )}
                </div>) ||
                null}
              {(bronzeSponsors.length &&
                <div className={styles.sponsors}>
                  <h2>Bronze</h2>
                  {bronzeSponsors.map(sponsor =>
                    <Sponsor key={sponsor.id} sponsor={sponsor} />,
                  )}
                </div>) ||
                null}
              {(individualSponsors.length &&
                <div className={styles.sponsors}>
                  <h2>Individual</h2>
                  {individualSponsors.map(sponsor =>
                    <Sponsor key={sponsor.id} sponsor={sponsor} />,
                  )}
                </div>) ||
                null}
            </div>
            <Footer />
          </div>
        </div>
      </div>) ||
    null
  );
};
export default withSponsorsQuery(Sponsors);
