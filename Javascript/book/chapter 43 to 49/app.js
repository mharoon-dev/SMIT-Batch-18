// // let name = "haroon" ====>>>> single line commit
// /* let name = "haroon" =====>>> multiple lines commit  */

// function gethello(name) {
//   alert(name);
// }

// function paidUserDashboard(paidOrNot) {
//   if (paidOrNot) {
//     alert("you are paid user and we are diverting you to paid dashboard!  ");
//   } else {
//     alert("you are not a premium user! firstly purchase it!");
//   }
// }

// let fieldId = email;

function checkAddress(fieldId) {
  // feildID = email
  if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
  } else {
    alert(document.getElementById(fieldId).value);
  }
}
let img = document.getElementById("img");
let isNewImg = false;

function changeImg() {
  if (!isNewImg) {
    img.src = "https://c8.alamy.com/comp/MR0G79/random-pictures-MR0G79.jpg"; ///  new img
    isNewImg = true;
  } else {
    img.src =
      "https://cdn.pixabay.com/photo/2021/12/12/20/00/play-6865967_1280.jpg"; ///  old img
    isNewImg = false;
  }
  console.log(img);
}
let email = document.getElementById("email");
let isBgChanged = false;

function bgChanger() {
  if (!isBgChanged) {
    email.style.width = "150px";
    email.style.height = "150px";
    email.style.backgroundColor = "yellow";
    isBgChanged = true;
  } else {
    email.style.backgroundColor = "white";
    email.style.width = "50px";
    email.style.height = "50px";
    isBgChanged = false;
  }
}
