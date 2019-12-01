import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import path from 'ramda/src/path';

export const SPONSOR_QUERY = gql`
  query allSponsors {
    nodeQuery(offset: 0, limit: 999, filter: { type: "sponsor" }) {
      entities {
        id: entityId
        ...SponsorsFragment
      }
    }
  }

  fragment SponsorsFragment on NodeSponsor {
    entityId
    title
    body {
      value
    }
    fieldSponsorLevel {
      entity {
        entityLabel
      }
    }
    fieldSponsorUrl {
      uri
    }
    fieldSponsorImage {
      url
      alt
    }
  }
`;

export const sponsorsListMapper = (entities) =>
  entities.map(entity => ({
    id: entity.entityId,
    title: entity.title,
    body: entity.body.value,
    sponsorLevel: path(['fieldSponsorLevel', 'entity', 'entityLabel'], entity),
    image: {
      url: path(['fieldSponsorImage', 'url'], entity),
      alt: path(['fieldSponsorImage', 'alt'], entity),
    },
    sponsorUrl: path(['fieldSponsorUrl', 'uri'], entity),
  }));

const withSponsors = graphql(SPONSOR_QUERY, {
  props: ({
    data: { nodeQuery: { entities = [] } = {}, loading },
  }) => ({ sponsors: loading ? [] : sponsorsListMapper(entities) }),
});

export default withSponsors;
