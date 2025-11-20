// // // console.log("working")

// // // var num = "45";
// // // num = Number(num);
// // // console.log(num);

// // var str = 45;
// // str = str.toString();
// // console.log(str)

// var val = 45.24564489484894564548
// console.log(val)
// val = val.toFixed(5)
// console.log(val)

var allDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var allMonth = ["jan", "feb", "march", "apr", "may", "june", "jul", 'aug', 'sep', 'oct' , 'nov', 'dec'];
var currentDate = new Date();
var currentDay = currentDate.getDay(); // 4
var currentMonth = currentDate.getMonth(); // 4
var currentDayName;
var currentMonthName = allMonth[currentMonth];
console.log(currentDay);
console.log(currentDate);
console.log(currentMonth);
console.log(currentMonthName);


for (i = 0; i < allDays.length; i++) {
  if (i == currentDay) {
    currentDayName = allDays[--i];
    console.log(currentDayName);
    break;
  }
}

