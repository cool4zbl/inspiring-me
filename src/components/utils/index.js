// FIXME: cannot find proper import path of utils
import moment from 'moment'

function isSameDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;

  return a.date() === b.date() && 
    a.month() === b.month() && 
    a.year() == b.year()
}

// FIXME isAfterDay 2017.03.12
function isBeforeDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;

  const aYear = a.year();
  const aMonth = a.month();

  const bYear = b.year();
  const bMonth = b.month();

  const isSameYear = aYear === bYear;
  const isSameMonth = aMonth === bMonth;

  if (isSameYear && isSameMonth) return a.date() < b.date();
  if (isSameYear) return aMonth < bMonth;
  return aYear < bYear;
}

function isInclusivelyAfterDay(a, b) {
  if (!moment.isMoment(a) || !moment.isMoment(b)) return false;
  return !isBeforeDay(a, b);
}

export default {
  isSameDay,
  isBeforeDay,
  isInclusivelyAfterDay
}
