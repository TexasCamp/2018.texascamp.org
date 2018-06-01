// @flow
import moment from 'moment';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import mapProps from 'recompose/mapProps';
import { formatTime } from 'utils';

const now = moment.utc();
const startDate = moment.utc('2018-05-31');
const endDate = moment.utc('2018-06-02');
const defaultStartDate = now.isBetween(startDate, endDate) ? now : startDate;
const withLogic = compose(
  withState('defaultDate', 'setDateFilter', defaultStartDate),
  mapProps(
    ({
      sessions,
      happenings,
      setDateFilter,
      defaultDate,
    }: PropsWithStateWithHandlersT) => {
      const schedule = sessions.concat(happenings);
      const acceptedSessions = schedule.filter(
        ({ status, timeslot, isPublished, type }) =>
          (status === 'Selected' &&
            timeslot.start !== null &&
            isPublished === true) ||
          type === 'happening',
      );
      const acceptedSessionsByDate = acceptedSessions
        .sort(
          (a, b) => a.timeslot.start.format('X') - b.timeslot.start.format('X'),
        )
        .filter(({ timeslot }) => defaultDate.isSame(timeslot.start, 'day'))
        .reduce((items, item) => {
          const val = `${formatTime(item.timeslot.start)}-${formatTime(
            item.timeslot.end,
          )}`;
          items[val] = items[val] || []; // eslint-disable-line no-param-reassign
          items[val].push(item);
          return items;
        }, {});
      return {
        sessions: Object.entries(acceptedSessionsByDate),
        setDateFilter,
        defaultDate,
      };
    },
  ),
);

export default withLogic;
