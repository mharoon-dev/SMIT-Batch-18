// var today = new Date();
// var newDate = new Date("june 30 2028  20:47:00");
// var msToday = today.getTime();
// var msNewDate = newDate.getTime();
// console.log(today);
// console.log(newDate);
// console.log(msToday);
// console.log(msNewDate);

// var diffTime = msNewDate - msToday;
// var calcDays = diffTime / (1000 * 60 * 60 * 24);
// // calcDays = Math.floor(calcDays)
// console.log(diffTime);
// console.log(calcDays);

var newDate = new Date();
console.log(newDate);
newDate.setFullYear(2030);
newDate.setMonth(6);
newDate.setDate(6);
newDate.setHours(6);
newDate.setMinutes(6);
newDate.setSeconds(6);
newDate.setMilliseconds(6);
console.log(newDate);
