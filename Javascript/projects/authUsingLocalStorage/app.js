// localStorage.setItem("isUserLoggedIn", JSON.stringify(false));
// isUserLoggedIn
let isUserLoggedIn = JSON.parse(localStorage.getItem("isUserLoggedIn"));
console.log(isUserLoggedIn);

if (!isUserLoggedIn) {
  //   window.location.replace = "./login.html";
  window.location.href = "./login.html";
  //   return;
}

// dashboard
let userNameSpan = document.getElementById("userName");
let loggedinUser = JSON.parse(localStorage.getItem("loggedinUser"));
userNameSpan.innerText = loggedinUser?.fullName;

// logout
function logout() {
  console.log("logout");
  localStorage.setItem("isUserLoggedIn", JSON.stringify(false));
  localStorage.removeItem("loggedinUser");
  window.location.reload();
}
