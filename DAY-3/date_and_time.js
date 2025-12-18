import * as date from 'date-and-time'
import * kolkata from 'date-and-time/timezones/Asia/Kolkata'
// var date = require('date-and-time')
const current = new Date() ;
// console.log(current);

// console.log(date.format(current , 'YYYY/MM/DD HH:mm:ss'))
// const pattern = date.compile('YYYY/MM/DD HH:mm:ss');
// console.log(date.format(current , pattern));


// parse

// console.log(date.parse('02-01-2015' , 'DD-MM-YYYY'))

const year = date.addYears(current , 2);
console.log(year)


const leap = date.isLeapYear(2015);
console.log(leap)