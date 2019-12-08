import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import { titleToLink } from '../utils';

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

export const sessionsListMapper = (entities) =>
  entities.map(entity => ({
    body: entity.body.value,
    summary: entity.body.summary,
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

const withSessions = graphql(SESSION_QUERY, {
  props: ({
    data: { nodeQuery: { entities = [] } = {}, loading },
  }) => ({ sessions: loading ? [] : sessionsListMapper(entities) }),
});

export default withSessions
