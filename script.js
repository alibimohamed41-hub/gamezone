let secretNumber = Math.floor(Math.random() * 100) + 1;

function guessGame() {
  const answer = prompt("Guess a number from 1 to 100!");

  if (answer === null || answer.trim() === "") {
    return;
  }

  const number = Number(answer);
  const result = document.getElementById("result");

  if (!Number.isInteger(number) || number < 1 || number > 100) {
    result.textContent = "Enter a whole number from 1 to 100!";
  } else if (number === secretNumber) {
    result.textContent = "🎉 Amazing! You guessed it! New number ready.";
    secretNumber = Math.floor(Math.random() * 100) + 1;
  } else if (number < secretNumber) {
    result.textContent = "📈 Too low! Try again!";
  } else {
    result.textContent = "📉 Too high! Try again!";
  }
}

function rpsGame() {
  const player = prompt(
    "Type rock, paper, or scissors:"
  );

  if (player === null) return;

  const choice = player.trim().toLowerCase();
  const choices = ["rock", "paper", "scissors"];
  const result = document.getElementById("result");

  if (!choices.includes(choice)) {
    result.textContent = "Please type rock, paper, or scissors.";
    return;
  }

  const computer = choices[
    Math.floor(Math.random() * choices.length)
  ];

  if (choice === computer) {
    result.textContent = "🤝 Draw! We both chose " + choice + ".";
  } else if (
    (choice === "rock" && computer === "scissors") ||
    (choice === "paper" && computer === "rock") ||
    (choice === "scissors" && computer === "paper")
  ) {
    result.textContent =
      "🏆 You win! Computer chose " + computer + ".";
  } else {
    result.textContent =
      "🤖 Computer wins! It chose " + computer + ".";
  }
}