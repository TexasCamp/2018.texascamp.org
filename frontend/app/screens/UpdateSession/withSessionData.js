// @flow
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const getSingleSession = gql`
  query allSessions($id: String!) {
    nodeById(id: $id) {
      ...SessionFragment
    }
  }

  fragment SessionFragment on NodeSession {
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
        ...PresenterFragment
      }
    }
    fieldSessionTrack {
      entity {
        entityId
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
