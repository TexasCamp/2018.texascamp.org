import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createSession = gql`
  mutation createSession($input: CreateSessionInput!) {
    CreateSession(input: $input) {
      errors
      violations {
        message
        path
        code
      }
      entity {
        entityLabel
        entityId
      }
    }
  }
`;

export default graphql(createSession, {
  props: ({ mutate }) => ({
    createSession: (
      title,
      skillLevel,
      trackId,
      speakers,
      description,
      name,
      email,
      company,
    ) =>
      mutate({
        variables: {
          input: {
            title,
            skill_level_id: parseInt(skillLevel, 10),
            track_id: parseInt(trackId, 10),
            speakers,
            description,
            contact_info: {
              name,
              email,
              company,
            },
          },
        },
      }),
  }),
});
