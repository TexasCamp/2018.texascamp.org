import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';

import { searchArr, multiFilter } from 'utils';

const filterByAll = (sessions, filters, textSearchInput) => {
  const sessionsFilteredbyProperties = multiFilter(sessions, filters);
  const sessionsFilteredBySearchTerm = searchArr(
    sessionsFilteredbyProperties,
    textSearchInput,
  );
  return sessionsFilteredBySearchTerm;
};

const initialFilters = {
  skillLevel: [],
  track: [],
};

const initialSessions = ({ sessions }) => sessions;

const withLogic = compose(
  withState('sessions', 'setSessions', initialSessions),
  withState('filters', 'setFilters', initialFilters),
  withState('textSearchInput', 'setSearchText', ''),
  withHandlers({
    changeSkillLevelFilters: ({
      filters,
      setFilters,
    }) => selectedSkillLevel => {
      // if filter is already applied, cancel filtere.
      const userIsRemovingFilter = filters.skillLevel.includes(
        selectedSkillLevel,
      );
      if (userIsRemovingFilter) {
        setFilters({
          ...filters,
          skillLevel: filters.skillLevel.filter(
            eachSkillLevel => eachSkillLevel !== selectedSkillLevel,
          ),
        });
      } else {
        setFilters({
          ...filters,
          skillLevel: [...filters.skillLevel, selectedSkillLevel],
        });
      }
    },
    changeTrackFilters: ({ filters, setFilters }) => selectedTrack => {
      const userIsRemovingFilter = filters.track.includes(selectedTrack);
      if (userIsRemovingFilter) {
        setFilters({
          ...filters,
          track: filters.track.filter(eachTrack => eachTrack !== selectedTrack),
        });
      } else {
        setFilters({
          ...filters,
          track: [...filters.track, selectedTrack],
        });
      }
    },
    changeTextFilter: props => ({ target: { value } }) => {
      props.setSearchText(value);
      // don't allow leading spaces
      if (!value.trim()) {
        props.setSearchText('');
      }
    },
    resetAllFilters: props => () => props.setFilters(initialFilters),
  }),
  withProps(({ sessions, filters, textSearchInput }) => {
    return {
      sessions: filterByAll(sessions, filters, textSearchInput),
    };
  }),
);

export default withLogic;
