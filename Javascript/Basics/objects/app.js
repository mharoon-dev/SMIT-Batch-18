// // // let name = "haroon";
// // // let email = "haroon@mail.com";
// // // let address = "abc street";
// // // let phone = "032468456";

// // const userInfo = {
// //   name: "muhammad",
// //   lastName: "haroon",
// //   email: "haroon@mail.com",
// //   address: "abc street",
// //   phone: "032468456",
// //   fullName: function () {
// //     // console.log(data);
// //     // return this.name + " " + this.lastName;
// //     return this;
// //   },
// // };

// // userInfo.gender = "male";

// // // function foo() {
// // //   userInfo.fullName = function (data) {
// // //     console.log(data)
// // //     return this.name + " " + this.lastName;
// // //   };
// // // }
// // // foo();

// // // function foo1() {
// // //   userInfo.fullName("abc");
// // // }

// // // foo1()

// // // console.log(userInfo);
// // // console.log(userInfo.name);
// // // console.log(userInfo.email);
// // // console.log(userInfo.phone);
// // // console.log(userInfo["address"]);

// // // userInfo.name = "talha";

// // console.log(userInfo);

// function Person(name, email, address, phone) {
//   this.name = name;
//   this.email = email;
//   this.address = address;
//   this.phone = phone;
// }

// let user1 = new Person("ahsan", "ahsan@mail.com", "abc street", "035256456");

// let user2 = new Person("ali", "ali@mail.com", "abc street", "032484456");

// // const user1 = {
// //   name: "ahsan",
// //   email: "ahsan@mail.com",
// //   address: "abc",
// //   phone: "056454",
// // }

// // const user2 = {
// //   name: "ali",
// //   email: "ali@mail.com",
// //   address: "abc",
// //   phone: "4654210230",
// // }

// console.log(user1);
// console.log(user2);

const userInfo = {
  name: "muhammad",
  lastName: "haroon",
  email: "haroon@mail.com",
  address: "abc street",
  phone: "032468456",
  assets: {
    car: 2,
    bike: 4,
    mobile: 1,
  },
  fullName: function () {
    return this;
  },
};


console.log(userInfo["assets"]["mobile"])