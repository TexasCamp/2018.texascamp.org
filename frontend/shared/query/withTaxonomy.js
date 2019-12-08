import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const TAXONOMY_TERM_QUERY = gql`
  query sessionFilterTerms {
    taxonomyTermQuery(offset: 0, limit: 999) {
      entities {
        entityLabel
        entityBundle
      }
    }
  }
`;

const tracksMapper = (entities) =>
  entities.filter(el => el.entityBundle === 'track').map(el => el.entityLabel);

const skillLevelsMapper = (entities) =>
  entities
    .filter(el => el.entityBundle === 'skill_level')
    .map(el => el.entityLabel);

const withTaxonomy = graphql(TAXONOMY_TERM_QUERY, {
  props: ({
    data: { taxonomyTermQuery: { entities = [] } = {}, loading },
  }) => ({
    tracks: loading ? [] : tracksMapper(entities),
    skillLevels: loading ? [] : skillLevelsMapper(entities),
  }),
});

export default withTaxonomy;
