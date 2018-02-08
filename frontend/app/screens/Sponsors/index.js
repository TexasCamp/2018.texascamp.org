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
import SidebarItem from 'SidebarItem';
import uniq from 'ramda/src/uniq';
import prospectus from '!file-loader?name=TexasCamp_2018_Sponsor_Prospectus_[hash].[ext]!documents/prospectus.pdf';

type SponsorGroupPropsT = {
  sponsors: SponsorT[],
};
const SponsorsGrouped = ({ sponsors }: SponsorGroupPropsT) => {
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
    <div className={styles.detail}>
      <div className={styles.mainContent}>
        {levels.map(eachLevel =>
          (<div className={styles.sponsors}>
            <h2>
              {eachLevel}
            </h2>
            <div className={styles.sponsorCompanyContainer}>
              {filterByCompanySponsor(eachLevel).map(sponsor =>
                <Sponsor key={sponsor.id} sponsor={sponsor} />,
              )}
            </div>
          </div>),
        )}
        <div className={styles.sponsors}>
          <h2>
            {'Individual'}
          </h2>
          {individualSponsors.map(({ title }) => <p>{`＋ ${title}`}</p>)}
        </div>
      </div>
      <div className={styles.section}>
        <SidebarItem
          title="sponsor"
          subtitle="Download our sponsor prospectus to get started."
          btnTitle="download"
          btnLink={prospectus}
        />
        <SidebarItem
          title="questions"
          subtitle="Let us help you find the right fit."
          btnTitle="contact"
          btnLink="mailto:hello@texascamp.org"
        />
      </div>
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
