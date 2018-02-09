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
import { prospectus } from 'files';

type SponsorsPropsT = {
  loading: boolean,
  sponsors: SponsorT[],
};
const Sponsors = ({
  loading,
  sponsors,
}: SponsorsPropsT): React.Element<any> | false => {
  const individualSponsors = sponsors.filter(
    ({ sponsorLevel }) => sponsorLevel === 'Individual',
  );
  const companySponsors: SponsorT[] = sponsors.filter(
    ({ sponsorLevel }) => sponsorLevel !== 'Individual',
  );
  const filterByCompanySponsor = (level: SponsorLevelT): SponsorT[] =>
    companySponsors.filter(({ sponsorLevel }) => sponsorLevel === level);

  // get list of sorted sponsor levels, with 'individual' omitted
  const levels: SponsorLevelT[] = uniq(
    companySponsors.map(({ sponsorLevel }) => sponsorLevel),
  ).sort((a, b) => {
    const ranks = {
      Platinum: 1,
      Gold: 2,
      Silver: 3,
      Bronze: 4,
    };
    return ranks[a] - ranks[b];
  });
  return (
    !loading &&
    <div>
      <Helmet title="Sponsors" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <h1 className={styles.title}>Brought to you by</h1>
          <div className={styles.detail}>
            <div className={styles.section}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Sponsor</div>
                <p>Download our sponsor prospectuc to get started.</p>
                <a href={prospectus} className={styles.button}>
                  Download
                </a>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Questions?</div>
                <p>Let us help you find the right fit.</p>
                <a href="/sponsor" className={styles.button}>
                  Contact us
                </a>
              </div>
            </div>
            <div className={styles.mainContent}>
              <p className={styles.introText}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <div className={styles.sponsorContainer}>
                {levels.map(eachLevel =>
                  (<div>
                    <h2>
                      {eachLevel} sponsors
                    </h2>
                    <div className={styles.sponsors}>
                      {filterByCompanySponsor(eachLevel).map(sponsor =>
                        <Sponsor key={sponsor.id} sponsor={sponsor} />,
                      )}
                    </div>
                  </div>),
                )}
                {individualSponsors &&
                  <div className={styles.individualSponsors}>
                    <h2>
                      {'Individual sponsors'}
                    </h2>
                    <ul>
                      {individualSponsors.map(({ title, sponsorUrl }) => {
                        return sponsorUrl
                          ? <li>
                            <a href={sponsorUrl}>
                              {title}
                            </a>
                          </li>
                          : <li>
                            {title}
                          </li>;
                      })}
                    </ul>
                  </div>}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default withSponsorsQuery(Sponsors);
