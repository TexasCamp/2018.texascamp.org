// @flow
import React from 'react';
import { cleanHtml } from 'utils';
import type { SessionT } from 'types';

type SessionIndividualProps = {
  session: SessionT,
};
const SessionIndividual = ({
  session: {
    body,
    skillLevel,
    timeslot,
    title,
    track,
    speakers,
    room,
    speakersBio,
  },
}: SessionIndividualProps) => {
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
      {timeslot &&
        <p>
          {`Timeslot: ${timeslot.toLocaleString()}`}
        </p>}
      <p>
        {`Track: ${track}`}
      </p>
      {room &&
        <p>
          {`Room: ${room}`}
        </p>}
      {speakersBio &&
        <p>
          {'Speakers Bio:'}
          {cleanHtml(speakersBio)}
        </p>}
    </div>
  );
};
export default SessionIndividual;
