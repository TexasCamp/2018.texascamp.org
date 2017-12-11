import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import lifecycle from 'recompose/lifecycle';
import { searchArr } from 'utils';

const createSessionVisibilityFilter = filterProp => (
  sessions,
  selectedFilter,
) =>
  sessions.map(el => {
    if (el[filterProp] === selectedFilter) {
      return { ...el, visibility: true };
    }
    return { ...el, visibility: false };
  });

const filterBySkillLevel = createSessionVisibilityFilter('skillLevel');
const filterByTrack = createSessionVisibilityFilter('track');

const showAllSessions = sessions =>
  sessions.map(el => ({ ...el, visibility: true }));

const withLogic = compose(
  withState('sessions', 'setSessions', ({ sessions }) => sessions),
  withState('skillLevelSelected', 'setSkillLevel', null),
  withState('trackSelected', 'setTrack', null),
  withState('textSearchInput', 'setSearchText', ''),
  withHandlers({
    filterBySkillLevel: props => skillLevel => {
      const {
        setSessions,
        sessions,
        setSkillLevel,
        setTrack,
        setSearchText,
      } = props;
      setTrack(null);
      setSearchText('');
      setSessions(filterBySkillLevel(sessions, skillLevel));
      setSkillLevel(skillLevel);
    },
    filterByTrack: props => track => {
      const {
        setSessions,
        sessions,
        setTrack,
        setSkillLevel,
        setSearchText,
      } = props;
      setSkillLevel(null);
      setSearchText('');
      setSessions(filterByTrack(sessions, track));
      setTrack(track);
    },
    filterByText: props => ({ target: { value } }) => {
      const {
        setSessions,
        sessions,
        setSearchText,
        setTrack,
        setSkillLevel,
      } = props;
      setTrack(null);
      setSkillLevel(null);
      setSearchText(value);
      if (!value) {
        showAllSessions(sessions);
      }
      const sessionsFilteredBySearchResults = searchArr(
        value,
        sessions,
      ).map((isMatch, eachInd) => ({
        ...sessions[eachInd],
        visibility: isMatch,
      }));
      setSessions(sessionsFilteredBySearchResults);
    },
    resetAllFilters: ({
      sessions,
      setSessions,
      setSkillLevel,
      setTrack,
      setSearchText,
    }) => () => {
      setSkillLevel(null);
      setTrack(null);
      setSearchText('');
      setSessions(sessions.map(el => ({ ...el, visibility: true })));
    },
  }),
  lifecycle({
    componentWillMount() {
      const { sessions, setSessions } = this.props;
      setSessions(sessions.map(el => ({ ...el, visibility: true })));
    },
  }),
);

export default withLogic;
