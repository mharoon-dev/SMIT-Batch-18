// // // // var
// // // // let
// // // // const

// // // var name = "ali";
// // // // name = "sufiyan"
// // // var name = "ahmad";

// // // let age = 18;
// // // age = 20;
// // // // let age = 25

// // // const gender = "male";
// // // console.log(gender)
// // // // gender = "female";
// // // // console.log(gender)

// // // // var allows to reDeclare and reValue
// // // // let just allows to reValue not reDeclare
// // // // const does not allow both

// // const fruits = ["apple", "orange", "mango"];
// // fruits.pop();
// // fruits.push("banana");
// // console.log(fruits);

// function getHello() {
//   name = "ali"; // local
// }

// // {
// //     let name  = "sufiyan"
// // }

// // let name  = "sufiyan"
// console.log(name);

// if (10 > 8) {
//   var num = 10;
// }

// console.log(num)

// // agar main code me variable bana hoa hai to kahi par access kar sakte hai
// // agar function ke andar bana hoa hai to sirf function me hi access kar sakte hai
// // or agar kisi execution {} instead function, me let or const to wo bahar nahi mile ge lekin agar var se banaya to wo bahar mil jae ge

let day = "sunday";

if (day == "monday") {
  console.log(1);
} else if (day == "tuesday") {
  console.log(2);
} else if (day == "wednesday") {
  console.log(3);
} else if (day == "thursday") {
  console.log(4);
} else if (day == "friday") {
  console.log(5);
} else if (day == "saturday") {
  console.log(6);
} else if (day == "sunday") {
  console.log(7);
}

switch (day) {
  case "monday":
    console.log(1);
    break;
  case "tuesday":
    console.log(2);
    break;
  case "wednesday":
    console.log(3);
    break;
  case "thursday":
    console.log(4);
    break;
  case "friday":
    console.log(5);
    break;
  case "saturday":
    console.log(6);
    break;
  default:
    console.log("today is holiday");
}
