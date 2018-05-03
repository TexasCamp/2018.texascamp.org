// @flow
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import mapProps from 'recompose/mapProps';
import { formatTime } from 'utils';

const now = new Date();
const startDate = new Date('05/31/2018');
const endDate = new Date('06/02/2018');
const defaultStartDate =
  now.getTime() >= startDate.getTime() && now.getTime() <= endDate.getTime()
    ? new Date(now.setHours(0, 0, 0, 0))
    : startDate;

const withLogic = compose(
  withState('defaultDate', 'setDateFilter', defaultStartDate),
  mapProps(
    ({ sessions, setDateFilter, defaultDate }: PropsWithStateWithHandlersT) => {
      const acceptedSessions = sessions.filter(
        ({ status, timeslot }) =>
          status === 'Selected' && timeslot.start !== null,
      );
      const acceptedSessionsByDate = acceptedSessions
        .sort((a, b) => a.timeslot.start - b.timeslot.start)
        .filter(
          ({ timeslot }) =>
            timeslot.start.toDateString().slice(0, 10) ===
            defaultDate.toDateString().slice(0, 10),
        )
        .reduce((items, item) => {
          const val = `${formatTime(
            new Date(item.timeslot.start),
          )}-${formatTime(new Date(item.timeslot.end))}`;
          items[val] = items[val] || []; // eslint-disable-line no-param-reassign
          items[val].push(item);
          return items;
        }, {});
      return {
        sessions: Object.entries(acceptedSessionsByDate),
        setDateFilter,
      };
    },
  ),
);

export default withLogic;
