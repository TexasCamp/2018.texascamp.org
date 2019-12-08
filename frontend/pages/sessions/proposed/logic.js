import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import mapProps from 'recompose/mapProps';
import { searchArr, multiFilter } from '../../../shared/utils';

const filterByAll = (
  sessions,
  filters,
  textSearchInput,
) => {
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

const withLogic = compose(
  withState('filters', 'setFilters', initialFilters),
  withState('textSearchInput', 'setSearchText', ''),
  withState('filtersOpen', 'setFiltersOpen', false),
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
    changeTrackFilters: ({
      filters,
      setFilters,
    }) => selectedTrack => {
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
    changeTextFilter: ({ setSearchText }) => ({
      target: { value },
    }) => {
      setSearchText(value);
      // don't allow leading spaces
      if (!value.trim()) {
        setSearchText('');
      }
    },
    resetAllFilters: ({ setFilters, setSearchText }) => () => {
      setFilters(initialFilters);
      setSearchText('');
    },
    openFilters: ({ setFiltersOpen, filtersOpen }) => () => {
      setFiltersOpen(!filtersOpen);
    },
  }),
  mapProps(
    ({
      sessions,
      filters,
      textSearchInput,
      skillLevels,
      changeSkillLevelFilters,
      tracks,
      changeTrackFilters,
      changeTextFilter,
      resetAllFilters,
      openFilters,
      filtersOpen,
    }) => {
      return {
        sessions: filterByAll(sessions, filters, textSearchInput),
        skillLevelButtons: skillLevels.map(eachLevel => ({
          isSelected: filters.skillLevel.includes(eachLevel),
          onClick: () => changeSkillLevelFilters(eachLevel),
          name: eachLevel,
        })),
        trackButtons: tracks.map(eachTrack => ({
          isSelected: filters.track.includes(eachTrack),
          onClick: () => changeTrackFilters(eachTrack),
          name: eachTrack,
        })),
        changeTextFilter,
        resetAllFilters,
        textSearchInput,
        openFilters,
        filtersOpen,
      };
    },
  ),
);

export default withLogic;
