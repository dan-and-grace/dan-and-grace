export const getDatetime = (date: string, time: string) =>
  new Date(`${date}, ${time}`);

export const formatAMPM = (date: Date) => {
  var hours = date.getHours();
  const minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const formattedMins = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + formattedMins + " " + ampm;
  return strTime;
};
