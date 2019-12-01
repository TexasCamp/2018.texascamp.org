import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const MAIN_NAV_QUERY = gql`
  query mainNavQuery {
    menuByName(name: "main") {
      description
      name
      links {
        label
        url {
          path
        }
      }
    }
  }
`;

const mainNavMapper = (links) => {
  return links.map(({ label, url: { path } }) => ({
    label,
    urlRoute: path,
  }));
};

const withMainNavQuery = graphql(MAIN_NAV_QUERY, {
  props: ({
    data: { menuByName: { links = [] } = {}, loading },
  }) => ({
    menuItems: loading ? [] : mainNavMapper(links),
  }),
});

export default withMainNavQuery;
