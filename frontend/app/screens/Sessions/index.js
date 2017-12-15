// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Header from 'Header';
import SessionsList from 'SessionsList';
import compose from 'recompose/compose';
import type { SessionT, SkillLevelT, TrackT } from 'types';
import withSessionQuery from './withSessionsQuery';
import withTaxonomyQuery from './withTaxonomyQuery';

type SessionsPageProps = {
  sessions: SessionT[],
  skillLevels: SkillLevelT[],
  tracks: TrackT[],
};
const SessionsPage = (props: SessionsPageProps) => {
  return (
    <div>
      <Helmet title="Sessions" />
      <Header heading="Sessions" />
      <SessionsList {...props} />
    </div>
  );
};

export default compose(withSessionQuery, withTaxonomyQuery)(SessionsPage);
