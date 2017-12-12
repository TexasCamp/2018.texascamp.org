// @flow
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import type { TrackT, SkillLevelT } from 'types';

const TAXONOMY_TERM_QUERY = gql`
  {
    taxonomyTermQuery(offset: 0) {
      entities {
        ...TaxonomyTermFragment
      }
    }
  }

  fragment TaxonomyTermFragment on Entity {
    entityLabel
    entityBundle
  }
`;

const tracksMapper = (entities: Array<Object>): TrackT[] =>
  entities.filter(el => el.entityBundle === 'track').map(el => el.entityLabel);

const skillLevelsMapper = (entities: Array<Object>): SkillLevelT[] =>
  entities
    .filter(el => el.entityBundle === 'skill_level')
    .map(el => el.entityLabel);

type TaxonomiesT = {
  tracks: TrackT[],
  skillLevels: SkillLevelT[],
};
const withTaxonomyQuery = graphql(TAXONOMY_TERM_QUERY, {
  props: ({
    data: { taxonomyTermQuery: { entities } = {}, loading },
  }: {
    data: { taxonomyTermQuery: { entities: Array<Object> }, loading: boolean },
  }): TaxonomiesT => ({
    tracks: loading ? [] : tracksMapper(entities),
    skillLevels: loading ? [] : skillLevelsMapper(entities),
  }),
});

export default withTaxonomyQuery;
