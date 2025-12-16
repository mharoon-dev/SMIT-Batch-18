// // let zipEntered = document.getElementById('zip').value
// // console.log(zipEntered)

// function fillCity() {
//   var cityName;
//   var zipEntered = document.getElementById("zip").value; /// 415656
//   switch (zipEntered) {
//     case "60608":
//       cityName = "Chicago";
//       break;
//     case "68114":
//       cityName = "Omaha";
//       break;
//     case "53212":
//       cityName = "Milwaukee";
//   }
//   document.getElementById("city").value = cityName;
// }

// // let name = 'haroon'
// // name = 'talha'

// function expandLoris() {
//   var expandedParagraph = "this is expanded text";
//   document.getElementById("slowLoris").innerHTML =
//     "<table class='table'><tr><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr></table>";
// }

// function placeAList() {
//   let listToPlace =
//     "<ol><li>Slow loris</li><li>Fast loris</li><li>Just-right loris</li></ol>";
//   document.getElementById("lorisList").innerHTML = listToPlace;
// }

// function hideList() {
//   document.getElementById("lorisList").innerHTML = "";
// }

// console.log(document.getElementById("img").className);
// function makeInvisible() {
//     document.getElementById("img").className += " hidden";
//     console.log(document.getElementById("img").className);
// }

let heading1 = document.getElementById("heading1");
// heading1.innerHTML = "heading replaced ";
heading1.innerText =
  "<table><tr><th>01</th><th>01</th><th>01</th><th>01</th><th>01</th></tr></table>";

// heading1.innerHTML = "<table><tr><th>01</th><th>01</th><th>01</th><th>01</th><th>01</th></tr></table>";
heading1.style.border = "2px solid green";
heading1.style.backgroundColor = "gray";
heading1.style.color = "yellow";
heading1.style.fontSize = "35px";
heading1.style.fontWeight = "400";
console.log(heading1);
let isAfter = false;

// function imageChanger() {
//   // console.log("working");
//   let img = document.getElementById("img");
//   // console.log(img.src)
//   if (isAfter) {
//     isAfter = false;
//     // console.log(img.src);
//     img.src = "./images/before.jpg";
//   } else {
//     isAfter = true;
//     img.src = "./images/after.jpg";
//   }
//   console.log(img);
// }


function imageChanger() {
  // console.log("working");
  let img = document.getElementById("img");
  // console.log(img.src)
  if (isAfter) {
    isAfter = false;
    // console.log(img.src);
    img.src = "./images/before.jpg";
  } else {
    isAfter = true;
    img.src = "./images/after.jpg";
  }
  console.log(img);
}
