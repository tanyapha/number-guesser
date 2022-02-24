'use strict';
// FUNCTION CREATES

const showMessage = function (location, message) {
  document.querySelector(location).textContent = message;
};

const selectTarget = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let target = selectTarget();
let score = 20;
let highscore = 0;
console.log(target);

// FOR THE CHECK FUNCTION

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let message = '';

  // when you lose ( have no points left)
  if (score <= 0) {
    message = "😭 You've LOST";
    document.querySelector('body').style.backgroundColor = '#B20000';
    showMessage('.number', target);
  } else {
    // when there is no guess
    if (!guess) {
      message = '🚫 No Guess!';

      // when you get it right
    } else if (guess === target) {
      message = '🎉 CORRECT ANSWER!';

      document.querySelector('body').style.backgroundColor = '#4CA64C';
      showMessage('.number', target);

      if (highscore < score) {
        highscore = score;
        showMessage('.highscore', highscore);
      }

      // when you guess to high or too low
    } else {
      message = guess > target ? '⬆️ Too High' : '⬆️ Too Low';
      score--;
    }
  }

  showMessage('.message', message);
  showMessage('.score', score);
});

// FOR AGAIN BUTTON

document.querySelector('.again').addEventListener('click', function () {
  target = selectTarget();
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  showMessage('.number', '?');
  showMessage('.message', 'Start guessing...');
  document.querySelector('.guess').value = null;
  console.log(target);
});
