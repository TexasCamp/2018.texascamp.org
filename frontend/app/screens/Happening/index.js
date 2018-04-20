// @flow

import React from 'react';
import NotFound from 'NotFound';
import SessionIndividual from 'SessionIndividual';
import withHappeningQuery from './withHappeningQuery';

const Happening = ({ happening }) =>
  (<div>
    {happening
      ? <SessionIndividual session={happening} />
      : <NotFound
        msg="No session matches that URL."
        linkText="Back to sessions"
        linkUrl="/sessions"
      />}
  </div>);

export default withHappeningQuery(Happening);
