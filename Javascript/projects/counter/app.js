let num = document.getElementById("num");
let counterNumber = 1;

function add() {
  // console.log("working");
  ++counterNumber;
  console.log(counterNumber);
  num.innerHTML = counterNumber;
}
function minus() {
  // console.log("working");
  if (counterNumber > 0) {
    --counterNumber;
    console.log(counterNumber);
    num.innerHTML = counterNumber;
  } 
}
function reset() {
  // console.log("working");
  counterNumber = 0;
  console.log(counterNumber);
  num.innerHTML = counterNumber;
}
