import React from 'react';
import uniq from 'ramda/src/uniq';
import compose from 'recompose/compose';
import { withApollo } from '../../shared/lib/withApollo';
import HeadTitle from '../../components/HeadTitle';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Sponsor from '../../components/Sponsor';
import withSponsors from '../../shared/query/withSponsors';
import styles from './styles.css';


const Sponsors = ({
  loading,
  sponsors,
}) => {
  const individualSponsors = sponsors.filter(
    ({ sponsorLevel }) => sponsorLevel === 'Individual',
  );
  const companySponsors = sponsors.filter(
    ({ sponsorLevel }) => sponsorLevel !== 'Individual',
  );
  const filterByCompanySponsor = (level) =>
    companySponsors.filter(({ sponsorLevel }) => sponsorLevel === level);

  // get list of sorted sponsor levels, with 'individual' omitted
  const levels = uniq(
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
      <HeadTitle title="Sponsors" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header image="sponsors" />
        <div className={styles.content}>
          <h1 className={styles.title}>Brought to you by</h1>
          <div className={styles.detail}>
            <div className={styles.section}>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Sponsor</div>
                <p>Download our sponsor prospectus to get started.</p>
                <a href="/TexasCamp_2018_Sponsor_Prospectus.pdf" className={styles.button}>
                  Download
                </a>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Questions?</div>
                <p>Let us help you find the right fit.</p>
                <a href="mailto:hello@texascamp.org" className={styles.button}>
                  Contact us
                </a>
              </div>
            </div>
            <div className={styles.mainContent}>
              <p className={styles.introText}>
                Thank you to our generous sponsors for helping make this event a
                reality. We couldn&apos;t do it without you!
              </p>
              <p className={styles.introText}>
                Now is your chance to support your local Drupal community,
                recruit from a diverse Drupal talent pool, and showcase your
                brand to the Texas Drupal community.
              </p>
              <div className={styles.sponsorContainer}>
                {levels.map(eachLevel =>
                  (<div key={eachLevel}>
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
                {individualSponsors.length > 0 &&
                  <div className={styles.individualSponsors}>
                    <h2>
                      {'Individual sponsors'}
                    </h2>
                    <ul>
                      {individualSponsors.map(({ id, title, sponsorUrl }) => {
                        return sponsorUrl
                          ? <li key={id}>
                            <a href={sponsorUrl}>
                              {title}
                            </a>
                          </li>
                          : <li key={id}>
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
export default compose(withApollo({ ssr: true }), withSponsors)(Sponsors);
