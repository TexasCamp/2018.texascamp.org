// @flow

import React from 'react';
import type { SessionT } from 'types';
import SessionIndividual from 'SessionIndividual';
import withSessionQuery from './withSessionQuery';

type SessionProps = {
  session: SessionT,
};

const Session = ({ session }: SessionProps) =>
  (<div>
    <h1>Individual Session Page</h1>
    <SessionIndividual session={session} />
  </div>);

export default withSessionQuery(Session);
