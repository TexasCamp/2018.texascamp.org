// @flow
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import compose from 'recompose/compose';

const TRACK_QUERY = gql`
  query sessionTracks {
    taxonomyTermQuery(offset: 0, limit: 99, filter: { vid: "track" }) {
      tracks: entities {
        name: entityLabel
        id: entityId
      }
    }
  }
`;

const SKILL_LEVELS_QUERY = gql`
  query sessionSkillLevels {
    taxonomyTermQuery(offset: 0, limit: 99, filter: { vid: "skill_level" }) {
      skillLevels: entities {
        name: entityLabel
        id: entityId
      }
    }
  }
`;

const loadingOptions = [{ id: 0, name: 'Loading...' }];

const withTracks = graphql(TRACK_QUERY, {
  props: ({
    data: { taxonomyTermQuery: { tracks } = {}, loading },
  }: {
    data: { taxonomyTermQuery: { tracks: Array<Object> }, loading: boolean },
  }): Object => ({
    tracks: loading ? loadingOptions : tracks,
  }),
});

const withSkillLevels = graphql(SKILL_LEVELS_QUERY, {
  props: ({
    data: { taxonomyTermQuery: { skillLevels } = {}, loading },
  }: {
    data: {
      taxonomyTermQuery: { skillLevels: Array<Object> },
      loading: boolean,
    },
  }): Object => ({
    skillLevels: loading ? loadingOptions : skillLevels,
  }),
});

export default compose(withTracks, withSkillLevels);
