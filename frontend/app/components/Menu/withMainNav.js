// @flow

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import type { MenuByNameQueryResponseT, MenuItemT } from 'types';

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

const mainNavMapper = (links: Array<Object>): MenuItemT[] => {
  return links.map(({ label, url: { path } }) => ({
    label,
    urlRoute: path,
  }));
};

export type MenuItemsT = {
  menuItems: MenuItemT[],
};
const withMainNavQuery = graphql(MAIN_NAV_QUERY, {
  props: ({
    data: { menuByName: { links = [] } = {}, loading },
  }: MenuByNameQueryResponseT): MenuItemsT => ({
    menuItems: loading ? [] : mainNavMapper(links),
  }),
});

export default withMainNavQuery;
