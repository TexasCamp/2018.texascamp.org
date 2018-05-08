// @flow

import React from 'react';
import type { SessionT } from 'types';
import NotFound from 'NotFound';
import SessionIndividual from 'SessionIndividual';
import withSessionQuery from './withSessionQuery';

type SessionProps = {
  session: SessionT,
};

const Session = ({ session }: SessionProps) =>
  (<div>
    {session
      ? <SessionIndividual session={session} />
      : <NotFound
        msg="No session matches that URL."
        linkText="Back to schedule"
        linkUrl="/schedule"
      />}
  </div>);

export default withSessionQuery(Session);
