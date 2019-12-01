import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import withMainNavQuery from './withMainNav';

const withOverlayToggle = withState('isActive', 'setActive', false);

const withOverlayHandler = withHandlers({
  toggleOverlay: props => () => props.setActive(!props.isActive),
});

export default compose(withMainNavQuery, withOverlayToggle, withOverlayHandler);
