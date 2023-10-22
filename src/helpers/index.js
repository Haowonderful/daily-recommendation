const compareDates = (date1, date2, isAsc = true) => {
  if (isAsc) return date1 - date2;

  return date2 - date1;
};

const compareDateStrings = (dateStr1, dateStr2, isAsc = true) => {
  const date1 = new Date(dateStr1);
  const date2 = new Date(dateStr2);
  return compareDates(date1, date2, isAsc);
};

module.exports = {
  compareDates,
  compareDateStrings
};