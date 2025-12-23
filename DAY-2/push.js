var calendar = require('node-calendar');

console.log("Current month's calender");
console.log("Sun\tMon\tTue\tWed\tThu\tFri\tSat");
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
var year = dateObj.getUTCFullYear();
var cal = new calendar.Calendar(6).monthdayscalendar(year, month);
//6 indicates to start from sunday
cal.forEach(element => {
    console.log((element+"").split(',').join('\t'));
});
console.log("Current time");
var date = new Date();
console.log(date.toString());