const dateString = "2024-03-15T12:48";

const dateTimeList = dateString.split("T");

const date = dateTimeList[0].split("-");

console.log(date);

let result = "";

const month = monthObj["03"];

result = month+" "+date[2]+" at ";

// console.log(result);

const timeList = dateTimeList[1].split(":");
let time = "";
if(parseInt(timeList[0]) === 12) time = `${timeList[0]}:${timeList[1]} PM`;
else{
  time = parseInt(timeList[0])>12? `${parseInt(timeList[0])- 12}:${timeList[1]} PM` : `${timeList[0]}:${timeList[1]} AM`;
}


console.log(time);

result = result + time;

console.log(result);