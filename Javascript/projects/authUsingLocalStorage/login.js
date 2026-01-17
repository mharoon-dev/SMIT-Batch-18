let isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"));
console.log(isUserLoggedIn);

if (isUserLoggedIn) {
  //   window.location.replace = "./login.html";
  window.location.href = "./index.html";
  //   return;
}

let loginEmailInput = document.getElementById("loginEmailInput");
let loginPassInput = document.getElementById("loginPassInput");
let users = JSON.parse(localStorage.getItem("users")) || [];
let userFound;

function login() {
  console.log(loginEmailInput.value);
  console.log(loginPassInput.value);

  for (let i = 0; i < users.length; i++) {
    let user = users[i];
    console.log(user);

    if (
      user.email == loginEmailInput.value &&
      user.password == loginPassInput.value
    ) {
      userFound = user;
      console.log(userFound);
    }

    // if (user.email == loginEmailInput.value) {
    //   console.log("ok");
    //   if (user.password == loginPassInput.value) {
    //     alert("login success");
    //     // break;
    //   } else {
    //     alert("worng password");
    //   }
    //   //   break;
    // } else {
    //   //   alert("wrong email");
    // }
    // break;
  }

  if (userFound) {
    alert("login success");
    localStorage.setItem("loggedinUser", JSON.stringify(userFound));
    localStorage.setItem("isUserLoggedIn", JSON.stringify(true));
    window.location.href = "./index.html";
  } else {
    alert("wrong credentials!");
  }
}
