const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "purple",
  "orange",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "maroon",
  "olive",
  "silver",
  "gold",
];

function bgColorChanger() {
  // console.log('working')
  let randomNum = Math.random() * colors.length;
  randomNum = Math.round(randomNum);
  console.log(randomNum);

  let color = colors[randomNum];
  console.log(color);

  let colorName = document.getElementById("colorName");
  let body = document.getElementById("body");
  let bgPara = document.getElementById("bgpara");
  colorName = colorName.innerHTML = color;
  body = body.style.backgroundColor = color;
  bgPara.style.fontSize = "25px";
  bgPara.style.padding = "50px";
  bgPara.style.color = color;
  bgPara.style.transform = "rotate(180deg)";
}
