// @flow
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';
import mapProps from 'recompose/mapProps';
import type { SessionT, SkillLevelT, TrackT } from 'types';
import { searchArr, multiFilter } from 'utils';

type FiltersT = {
  skillLevel: SkillLevelT[],
  track: TrackT[],
};

type InitialPropsT = {
  sessions: SessionT[],
  skillLevels: SkillLevelT[],
  tracks: TrackT[],
};

type InitialStateT = {
  filters: FiltersT,
  setFilters: Function,
  textSearchInput: string,
  setSearchText: Function,
};

type PropsWithStateT = InitialPropsT & InitialStateT;

type PropsWithStateWithHandlersT = PropsWithStateT & {
  changeSkillLevelFilters: Function,
  changeTrackFilters: Function,
  changeTextFilter: Function,
  resetAllFilters: Function,
};

const filterByAll = (
  sessions: SessionT[],
  filters: FiltersT,
  textSearchInput: string,
): SessionT[] => {
  const sessionsFilteredbyProperties = multiFilter(sessions, filters);
  const sessionsFilteredBySearchTerm = searchArr(
    sessionsFilteredbyProperties,
    textSearchInput,
  );
  return sessionsFilteredBySearchTerm;
};

const initialFilters: FiltersT = {
  skillLevel: [],
  track: [],
};

const withLogic = compose(
  withState('filters', 'setFilters', initialFilters),
  withState('textSearchInput', 'setSearchText', ''),
  withHandlers({
    changeSkillLevelFilters: ({
      filters,
      setFilters,
    }: PropsWithStateT) => selectedSkillLevel => {
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
    }: PropsWithStateT) => selectedTrack => {
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
    changeTextFilter: ({ setSearchText }: PropsWithStateT) => ({
      target: { value },
    }) => {
      setSearchText(value);
      // don't allow leading spaces
      if (!value.trim()) {
        setSearchText('');
      }
    },
    resetAllFilters: ({ setFilters }: PropsWithStateT) => () =>
      setFilters(initialFilters),
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
    }: PropsWithStateWithHandlersT) => {
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
      };
    },
  ),
);

export default withLogic;
