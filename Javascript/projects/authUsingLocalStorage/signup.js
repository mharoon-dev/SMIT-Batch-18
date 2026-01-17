let isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"));
console.log(isUserLoggedIn);

if (isUserLoggedIn) {
  //   window.location.replace = "./login.html";
  window.location.href = "./index.html";
  //   return;
}

let fullNameInput = document.getElementById("fullNameInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let passInput = document.getElementById("passInput");

let users = JSON.parse(localStorage.getItem("users")) || [];

function signup() {
  // console.log(fullNameInput.value)
  // console.log(emailInput.value)
  // console.log(phoneInput.value)
  // console.log(passInput.value)

  let userInfo = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passInput.value,
  };

  users.push(userInfo);
  console.log(users);

  localStorage.setItem("users", JSON.stringify(users));

  window.location.href = "./login.html";
}
