let againBtn = document.getElementById("again");
let input = document.getElementById("input");
let guessText = document.getElementById("guessText");
let check = document.getElementById("check");
let score = document.getElementById("score");
let highScore = document.getElementById("highScore");
let randomNum = Math.round(Math.random() * 20);
let currentScore = 20;
let highScoree = 0;

function gameOver() {
  input.value = "";
  guessText.innerText = "enter check to start";
  score.innerText = "20";
  currentScore = 20;
  randomNum = Math.round(Math.random() * 20);
}


function checkTheNumber() {
  console.log(randomNum);
  console.log(input.value);

  // update text
  guessText.innerText = "start guessing.....";

  // is value less then 20 or not
  if (input.value > 20) {
    alert("number should be between 1 to 20");
    input.value = "";
  }

  // game over
  if (currentScore == 1) {
    alert("game over");
    // input.value = "";
    // guessText.innerText = "enter check to start";
    // score.innerText = "20";
    return gameOver();
  }

  // update text condition
  if (+input.value < randomNum) {
    guessText.innerText = "too low";
  } else {
    guessText.innerText = "too high";
  }

  // correct and wrong condition
  if (randomNum === +input.value) {
    guessText.innerText = "correct! press again btn to start!";

    if (highScoree > currentScore) {
      return;
    } else {
      highScoree = currentScore;
      highScore.innerText = highScoree;
    }
    alert("you won the game");
    console.log("correct");
  } else {
    console.log("wrong");
    --currentScore;
    score.innerText = currentScore;
    console.log(currentScore);
  }
}

function startAgain() {
  return gameOver();
}

