// // // let div = document.getElementById("parent");
// // // let h1 = document.getElementsByTagName("h1"); // [h1,h1,h1,h1,h1]
// // // // console.log(h1);

// // // // let firstH1 = h1[0];
// // // // let firstH1 = div.firstChild;
// // // // let firstH1 = div.childNodes[2];
// // // let lastH1 = div.lastChild;
// // // // console.log(firstH1)
// // // console.log(lastH1);

// // let fourthH1 = document.getElementById("fourth");
// // let five = fourthH1.nextSibling
// // console.log(fourthH1);
// // console.log(five);

// let img = document.getElementById("img");
// let setAlt = img.setAttribute("alt", "altImg asdsad asdsadsa asdasdsa"); // img
// let getAlt = img.getAttribute("alt"); // img
// console.log(img);
// console.log(getAlt);

let imgShowHoRahiHai = true;
function hideImage() {
  //   console.log("working");

  let img = document.getElementById("img");
  let btn = document.getElementById("btn")
  console.log(img);

  console.log(imgShowHoRahiHai);

  if (imgShowHoRahiHai) {
    console.log("condition true ho gai");
    let setClass = img.setAttribute("class", "hidden");
    imgShowHoRahiHai = false;
    btn.innerText = "show"
} else {
    console.log("else chala");
    let setClass = img.setAttribute("class", "");
    imgShowHoRahiHai = true;
    btn.innerText = "hide"
  }
}
