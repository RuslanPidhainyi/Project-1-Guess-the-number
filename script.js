'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

let highscore = 0;

const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);
  console.log(guessingNumber, typeof guessingNumber);

  //No input
  if (!guessingNumber) {
    displayGuessMessage('Input some number');

    //Player won
  } else if (guessingNumber === secretNumber) {
    displayGuessMessage('Right!');

    document.querySelector('.question').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'rgb(9, 250, 21)';

    document.querySelector('.question').style.width = '50rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //Number from input is wrong
  else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      displayGuessMessage(
        guessingNumber > secretNumber ? 'Bigger number!' : 'Smaller number!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayGuessMessage('Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

const startOver = document
  .querySelector('.again')
  .addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor = 'black';
    displayGuessMessage('Start guessing');
    Number((document.querySelector('.score').textContent = score));
    document.querySelector('.number-input').value = null;
    document.querySelector('.question').textContent = '???';
    document.querySelector('.question').style.width = '25rem';
  });
