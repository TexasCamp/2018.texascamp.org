// @flow
import React from 'react';
import { cleanHtml } from 'utils';
import type { SessionT } from 'types';
import NotFound from 'NotFound';
import withLogic from './logic';

type SessionIndividualProps = {
  session?: SessionT,
};
const SessionIndividual = (props: SessionIndividualProps) => {
  if (!props.session) {
    // redirect to sessions if there is no associated associated session name.
    return <NotFound />;
  }
  const {
    body,
    skillLevel,
    timeslot,
    title,
    track,
    speakers,
    room,
    speakersBio,
  } = props.session;
  return (
    <div>
      <h2>
        {`${title}`}
      </h2>
      <p>
        {'Description:'}
        {cleanHtml(body)}
      </p>
      <p>
        {`Experience Level: ${skillLevel}`}
      </p>
      <p>
        <span>Speakers:</span>
        {speakers.map(eachName =>
          (<span key={eachName}>
            {` ${eachName} `}
          </span>),
        )}
      </p>
      <p>
        {`Timeslot: ${timeslot}`}
      </p>
      <p>
        {`Track: ${track}`}
      </p>
      <p>
        {`Room: ${room}`}
      </p>
      <p>
        {'Speakers Bio:'}
        {cleanHtml(speakersBio)}
      </p>
    </div>
  );
};
export default withLogic(SessionIndividual);
