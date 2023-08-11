let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  tie: 0,
  lose: 0,
};

/*
 we can also use
  if(!score){
    score = {
      win : 0,
      lose : 0,
      tie : 0
    }
  }
*/

let playgame = (playermove) => {
  const computer = computermove();

  let result = "";

  if (playermove === "rock") {
    if (computer === "rock") {
      result = "tie";
    } else if (computer === "paper") {
      result = "lose";
    } else {
      result = "win";
    }
  } else if (playermove === "scissor") {
    if (computer === "rock") {
      result = "lose";
    } else if (computer === "paper") {
      result = "win";
    } else {
      result = "tie";
    }
  } else if (playermove === "paper") {
    if (computer === "rock") {
      result = "win";
    } else if (computer === "paper") {
      result = "tie";
    } else {
      result = "lose";
    }
  }

  if (result === "win") {
    score.win += 1;
  } else if (result === "lose") {
    score.lose += 1;
  } else if (result === "tie") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  alert(`you say : ${playermove} \ncomputer say : ${computer} \n${result}
    win : ${score.win} , lose : ${score.lose} , tie : ${score.tie}`);
};

function computermove() {
  const randomno = Math.random();

  let computer = "";

  if (randomno > 0 && randomno < 1 / 3) {
    computer = "rock";
  } else if (randomno > 1 / 3 && randomno < 2 / 3) {
    computer = "paper";
  } else {
    computer = "scissor";
  }

  return computer;
}

let resetscore = () => {
  score.win = 0;
  score.lose = 0;
  score.tie = 0;
  localStorage.removeItem("score");
};
