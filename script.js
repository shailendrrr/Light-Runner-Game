const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const scoreEl = document.getElementById("score");

let score = 0;

document.addEventListener("keydown", () => {
  if (!player.classList.contains("jump")) {
    player.classList.add("jump");
    setTimeout(() => {
      player.classList.remove("jump");
    }, 500);
  }
});

setInterval(() => {
  let playerBottom = parseInt(
    window.getComputedStyle(player).getPropertyValue("bottom")
  );
  let obstacleRight = parseInt(
    window.getComputedStyle(obstacle).getPropertyValue("right")
  );

  if (obstacleRight > 520 && obstacleRight < 580 && playerBottom < 40) {
    alert("Game Over! Score: " + score);
    score = 0;
  }
}, 10);

setInterval(() => {
  score++;
  scoreEl.innerText = score;
}, 500);
