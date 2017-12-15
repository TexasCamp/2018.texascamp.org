import withProps from 'recompose/mapProps';

const withLogic = withProps(
  ({ sessions, match: { params: { sessionName } } }) => {
    return {
      session: sessions.find(({ urlString }) => urlString === sessionName),
    };
  },
);

export default withLogic;
