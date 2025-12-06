// let name = "haroon" ====>>>> single line commit
/* let name = "haroon" =====>>> multiple lines commit  */

function gethello(name) {
  alert(name);
}

function paidUserDashboard(paidOrNot) {
  if (paidOrNot) {
    alert("you are paid user and we are diverting you to paid dashboard!  ");
  } else {
    alert("you are not a premium user! firstly purchase it!");
  }
}

function checkAddress(fieldId) {
  if (document.getElementById(fieldId).value === "") {
    alert("Email address required.");
  }
}
