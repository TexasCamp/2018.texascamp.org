// @flow

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import type { SessionT } from 'types';
import { titleToLink } from 'utils';

export const SESSION_QUERY = gql`
  query allSessions {
    nodeQuery(offset: 0, limit: 999, filter: { type: "session" }) {
      entities {
        ...SessionFragment
      }
    }
  }

  fragment SessionFragment on NodeSession {
    body {
      value
    }
    entityPublished
    fieldSessionContactCompany
    fieldSessionContactEmail
    fieldSessionContactName
    fieldSessionSkillLevel {
      entity {
        entityLabel
      }
    }
    fieldSessionRoom
    fieldSessionSpeakers
    fieldSessionSpeakersBio {
      value
    }
    fieldSessionStatus {
      entity {
        entityLabel
      }
    }
    fieldSessionTimeslot {
      value
    }
    fieldSessionTrack {
      entity {
        entityLabel
      }
    }
    title
  }
`;

export const sessionsListMapper = (entities: Array<Object>): Array<SessionT> =>
  entities.map(entity => ({
    body: entity.body.value,
    contactCompany: entity.fieldSessionContactCompany,
    contactEmail: entity.fieldSessionContactEmail,
    contactName: entity.fieldSessionContactName,
    room: entity.fieldSessionRoom,
    status:
      entity.fieldSessionStatus && entity.fieldSessionStatus.entity.entityLabel,
    isPublished: entity.entityPublished,
    skillLevel: entity.fieldSessionSkillLevel.entity.entityLabel,
    speakers: entity.fieldSessionSpeakers,
    speakersBio: entity.fieldSessionSpeakersBio.value,
    timeslot:
      entity.fieldSessionTimeslot &&
      new Date(entity.fieldSessionTimeslot.value),
    track: entity.fieldSessionTrack.entity.entityLabel,
    title: entity.title,
    urlString: titleToLink(entity.title),
  }));

const withSessionsQuery = graphql(SESSION_QUERY, {
  props: ({
    data: { nodeQuery: { entities } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ sessions: loading ? [] : sessionsListMapper(entities) }),
});

export default withSessionsQuery;
