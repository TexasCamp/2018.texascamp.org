// @flow
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getSingleSession = gql`
  query getSingleSession($id: String!) {
    nodeById(id: $id) {
      ... on NodeSession {
        body {
          value
        }
        fieldSessionContactCompany
        fieldSessionContactEmail
        fieldSessionContactName
        fieldSessionSkillLevel {
          entity {
            entityId
          }
        }
        fieldSessionPresenters {
          entity {
            ... on ParagraphPresenter {
              fieldSessionPresenter
              fieldSessionBio {
                value
              }
            }
          }
        }
        fieldSessionTrack {
          entity {
            entityId
          }
        }
        title
      }
    }
  }
`;

const withSession = graphql(getSingleSession, {
  options: ({ match }): { match: Object } => ({
    variables: {
      id: match.params.id,
    },
  }),
  props: ({
    data: { nodeById, loading },
  }: {
    data: { nodeById: Object, loading: boolean },
  }) => ({ session: loading ? undefined : nodeById, fetchingSession: loading }),
});

export default withSession;
