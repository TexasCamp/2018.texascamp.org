require('dotenv-extended').load();
const withCSS = require('@zeit/next-css');
const ApolloClient = require('apollo-client').ApolloClient;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;
const HttpLink = require('apollo-link-http').HttpLink;
const fetch = require('isomorphic-unfetch');
const gql = require('graphql-tag');

const titleToLink = (titleStr) =>
  titleStr.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').join('-');

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.API,
    fetch,
  }),
  cache: new InMemoryCache(),
});

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[path][name]__[local]--[hash:base64:5]",
  },
  publicRuntimeConfig: {
    API: process.env.API
  },
  exportTrailingSlash: true,
  exportPathMap: async function() {
    let paths = {
      '/': { page: '/index' },
      '/news': { page: '/news' },
      '/sponsors': { page: '/sponsors' },
      '/sessions/proposed': { page: '/sessions/proposed' },
    };

    // News pages
    try {
      const newsQuery = await client.query({
        query: gql`query allNews {
          nodeQuery(offset: 0, limit: 999, filter: { type: "news" }) {
            entities {
              title
            }
          }
        }`
      });

      newsQuery.data.nodeQuery.entities.forEach(news => {
        paths[`/news/${titleToLink(news.title)}`] = { page: '/news/[newsTitle]', query: { newsTitle: titleToLink(news.title) } };
      })
    } catch (e) {
      console.error(`Error exporting news pages: ${e.message}`);
    }

    // Sessions pages
    try {
      const sessionsQuery = await client.query({
        query: gql`query allSessions {
          nodeQuery(offset: 0, limit: 999, filter: { type: "session" }) {
            entities {
              title
            }
          }
        }`
      });

      sessionsQuery.data.nodeQuery.entities.forEach(session => {
        paths[`/sessions/${titleToLink(session.title)}`] = { page: '/sessions/[sessionName]', query: { sessionName: titleToLink(session.title) } };
      })
    } catch (e) {
      console.error(`Error exporting sessions pages: ${e.message}`);
    }

    return paths;
  },
})