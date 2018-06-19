// @flow

import compose from 'recompose/compose';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import type { SessionT } from 'types';
import { titleToLink } from 'utils';

export const SESSION_QUERY = gql`
  query allSessions {
    nodeQuery(offset: 0, limit: 999, filter: { type: "session" }) {
      entities {
        id: entityId
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
    fieldSessionYoutubeLink {
      uri
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
        moment.utc(entity.fieldSessionTimeslot.value),
      end:
        entity.fieldSessionTimeslot &&
        moment.utc(entity.fieldSessionTimeslot.endValue),
    },
    track: entity.fieldSessionTrack.entity.entityLabel,
    youtubeLink:
      entity.fieldSessionYoutubeLink && entity.fieldSessionYoutubeLink.uri,
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

export const HAPPENINGS_QUERY = gql`
  query allHappenings {
    nodeQuery(offset: 0, limit: 999, filter: { type: "happening" }) {
      entities {
        ...HappeningFragment
      }
    }
  }

  fragment HappeningFragment on NodeHappening {
    title
    body {
      value
      summary
    }
    entityPublished
    fieldSessionRoom
    fieldSessionPresenters {
      entity {
        ...PresenterFragment
      }
    }
    fieldSessionTimeslot {
      value
      startDate
      endValue
      endDate
    }
    fieldSessionYoutubeLink {
      uri
    }
  }

  fragment PresenterFragment on ParagraphPresenter {
    fieldSessionPresenter
    fieldSessionBio {
      value
    }
  }
`;

export const happeningsListMapper = (
  entities: Array<Object>,
): Array<SessionT> =>
  entities.map(entity => ({
    body: entity.body && entity.body.value,
    summary: entity.body && entity.body.summary,
    room: entity.fieldSessionRoom,
    isPublished: entity.entityPublished,
    speakers: entity.fieldSessionPresenters.map(paragraph => ({
      fieldSessionPresenter: paragraph.entity.fieldSessionPresenter,
      fieldSessionBio:
        paragraph.entity.fieldSessionBio &&
        paragraph.entity.fieldSessionBio.value,
    })),
    timeslot: {
      start:
        entity.fieldSessionTimeslot &&
        moment.utc(entity.fieldSessionTimeslot.value),
      end:
        entity.fieldSessionTimeslot &&
        moment.utc(entity.fieldSessionTimeslot.endValue),
    },
    youtubeLink:
      entity.fieldSessionYoutubeLink && entity.fieldSessionYoutubeLink.uri,
    title: entity.title,
    urlString: titleToLink(entity.title),
    type: 'happening',
  }));

const withHappeningsQuery = graphql(HAPPENINGS_QUERY, {
  props: ({
    data: { nodeQuery: { entities = [] } = {}, loading },
  }: {
    data: { nodeQuery: { entities: Array<Object> }, loading: boolean },
  }) => ({ happenings: loading ? [] : happeningsListMapper(entities) }),
});

export default compose(withSessionsQuery, withHappeningsQuery);
