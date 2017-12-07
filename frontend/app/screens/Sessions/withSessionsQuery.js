// @flow

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import type { SessionT } from 'types';

export const EVENT_QUERY = gql`
  {
    nodeQuery(offset: 0, limit: 999, filter: { type: "session" }) {
      entities {
        ...SessionFragment
      }
    }
  }

  fragment SessionFragment on NodeSession {
    body
    fieldSessionContactCompany
    fieldSessionContactEmail
    fieldSessionContactName
    fieldSessionSkillLevel
    fieldSessionSpeakers
    fieldSessionSpeakersBio
    fieldSessionTimeslot
    fieldSessionTrack
    title
  }
`;

const sessionMapper = (entities: Array<Object>): Array<SessionT> =>
  entities.map(entity => ({
    body: entity.body,
    contactCompany: entity.fieldSessionContactCompany,
    contactEmail: entity.fieldSessionContactEmail,
    contactName: entity.fieldSessionContactName,
    skillLevel: entity.fieldSessionSkillLevel,
    speakers: entity.fieldSessionSpeakers,
    speakersBio: entity.fieldSessionSpeakersBio,
    timeslot: entity.fieldSessionTimeslot,
    track: entity.fieldSessionTrack,
    title: entity.title,
  }));

const withSessionsQuery = graphql(EVENT_QUERY, {
  props: ({
    data: { nodeQuery: { entities } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ sessions: loading ? [] : sessionMapper(entities) }),
});

export default withSessionsQuery;
