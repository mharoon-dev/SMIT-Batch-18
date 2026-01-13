// // let emailInput = document.getElementById("emailInput");
// // let para = document.getElementById("para");

// // function saveData() {
// //   console.log(emailInput.value);
// //   localStorage.setItem("email", emailInput.value);
// // }

// // function getData() {
// //   let getEmail = localStorage.getItem("email");
// //   console.log(getEmail);
// //   para.innerText = getEmail;
// // }

// let names = ["ahmad", "talha", "sufiyan", "sarmad", "abdul "];
// function saveNames() {
//   //   let converted = JSON.stringify(names);
//   localStorage.setItem("names", JSON.stringify(names));
// }

// function getNames() {
//   let getNamess = JSON.parse(localStorage.getItem("names"));
// //   JSON.parse(getNamess);
//   console.log(getNamess);
// }

let name = document.getElementById("name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let signupBtn = document.getElementById("signupBtn");
let loginBtn = document.getElementById("loginBtn");

function signup() {
  //   let convertedName = JSON.stringify(name.value);
  //   let convertedEmail = JSON.stringify(email.value);
  //   let convertedPassword = JSON.stringify(password.value);

  if (!name.value || !email.value || !password.value) {
    return alert("enter values");
  }

  localStorage.setItem("name", name.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);
}

function login() {
  //   let convertedPassword = JSON.stringify(password.value);

  let dbEmail = localStorage.getItem("email");
  let dbPass = localStorage.getItem("password");

  localStorage.setItem("isUserLoggedin", JSON.stringify(true));

  if (loginEmail.value != dbEmail) {
    return alert("wrong email!");
  }

  if (loginPassword.value != dbPass) {
    return alert("wrong password!");
  }

  alert("login success");
}

function delAccount() {
  let checkUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedin"));

  if (checkUserLoggedIn) {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.setItem("isUserLoggedin", JSON.stringify(false));
  }
}
