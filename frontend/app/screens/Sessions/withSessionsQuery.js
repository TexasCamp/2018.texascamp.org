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
    fieldSessionSkillLevel {
      entity {
        entityLabel
      }
    }
    fieldSessionRoom
    fieldSessionPresenters {
      entity {
        ...PresenterFragment
      }
    }
    fieldSessionStatus {
      entity {
        entityLabel
      }
    }
    fieldSessionTimeslot {
      value
      startDate
      endValue
      endDate
    }
    fieldSessionTrack {
      entity {
        entityLabel
      }
    }
    title
  }

  fragment PresenterFragment on ParagraphPresenter {
    fieldSessionPresenter
    fieldSessionBio {
      value
    }
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
    status:
      entity.fieldSessionStatus && entity.fieldSessionStatus.entity.entityLabel,
    isPublished: entity.entityPublished,
    skillLevel: entity.fieldSessionSkillLevel.entity.entityLabel,
    speakers: entity.fieldSessionPresenters.map(paragraph => ({
      fieldSessionPresenter: paragraph.entity.fieldSessionPresenter,
      fieldSessionBio:
        paragraph.entity.fieldSessionBio &&
        paragraph.entity.fieldSessionBio.value,
    })),
    timeslot: {
      start:
        entity.fieldSessionTimeslot &&
        new Date(entity.fieldSessionTimeslot.value),
      end:
        entity.fieldSessionTimeslot &&
        new Date(entity.fieldSessionTimeslot.endValue),
    },
    track: entity.fieldSessionTrack.entity.entityLabel,
    title: entity.title,
    urlString: titleToLink(entity.title),
  }));

const withSessionsQuery = graphql(SESSION_QUERY, {
  props: ({
    data: { nodeQuery: { entities = [] } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ sessions: loading ? [] : sessionsListMapper(entities) }),
});

export default withSessionsQuery;
