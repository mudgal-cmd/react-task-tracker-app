//Date and time parsing.

const parseDateTime = (dateTime) => {

  const monthObj = { "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec", };

  const dateTimeList = dateTime.split("T");

  const dateList = dateTimeList[0].split("-");

  const timeList = dateTimeList[1].split(":");

  let day = `${monthObj[dateList[1]]} ${dateList[1]} at`;

  let time = "";

  if (parseInt(timeList[0]) === 12) time = `${day} ${timeList[0]}:${timeList[1]} PM`;
  else {
    day = parseInt(timeList[0]) > 12 ? `${day} ${parseInt(timeList[0]) - 12}:${timeList[1]} PM` : `${day} ${timeList[0]}:${timeList[1]} AM`;
  }

  return day;

}

export default parseDateTime;