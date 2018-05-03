// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import Menu from 'Menu';
import Footer from 'Footer';
import SessionsList from 'SessionsList';
import compose from 'recompose/compose';
import type { SessionT, SkillLevelT, TrackT } from 'types';
import withSessionsQuery from 'Sessions/withSessionsQuery';
import withTaxonomyQuery from 'Sessions/withTaxonomyQuery';
import styles from './styles.css';

type ProposedSessionsPageProps = {
  sessions: SessionT[],
  skillLevels: SkillLevelT[],
  tracks: TrackT[],
};
const ProposedSessionsPage = (props: ProposedSessionsPageProps) => {
  return (
    <div>
      <Helmet title="Sessions" />
      <Menu />
      <div className={styles.contentWrapper}>
        <Header />
        <div className={styles.content}>
          <SessionsList {...props} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default compose(withSessionsQuery, withTaxonomyQuery)(
  ProposedSessionsPage,
);
