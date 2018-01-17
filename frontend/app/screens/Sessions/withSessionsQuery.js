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
      summary
    }
    entityPublished
    fieldSessionContactCompany
    fieldSessionContactEmail
    fieldSessionContactName
    fieldSessionSkillLevel
    fieldSessionRoom
    fieldSessionPresenters {
      fieldSessionPresenter
      fieldSessionBio
    }
    fieldSessionStatus
    fieldSessionTimeslot
    fieldSessionTrack
    title
  }
`;

export const sessionsListMapper = (entities: Array<Object>): Array<SessionT> =>
  entities.map(entity => ({
    body: entity.body.value,
    summary: entity.body.summary,
    contactCompany: entity.fieldSessionContactCompany,
    contactEmail: entity.fieldSessionContactEmail,
    contactName: entity.fieldSessionContactName,
    room: entity.fieldSessionRoom,
    status: entity.fieldSessionStatus,
    isPublished: entity.entityPublished,
    skillLevel: entity.fieldSessionSkillLevel,
    speakers: entity.fieldSessionPresenters,
    timeslot:
      entity.fieldSessionTimeslot && new Date(entity.fieldSessionTimeslot),
    track: entity.fieldSessionTrack,
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
