import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import moment from 'moment';
import { titleToLink } from '../utils';

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
  entities,
) =>
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

const withHappenings = graphql(HAPPENINGS_QUERY, {
  props: ({
    data: { nodeQuery: { entities = [] } = {}, loading },
  }) => ({ happenings: loading ? [] : happeningsListMapper(entities) }),
});

export default withHappenings
