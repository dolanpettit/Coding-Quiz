var scoreList = document.getElementById("score-list");

const scores = JSON.parse(localStorage.getItem("Scores")) || [];

for (var i = 0; i < scores.length; i++) {
  var userScore = scores[i];

  var li = document.createElement("li");
  li.textContent = "Name: " + userScore.name + " | Score: " + userScore.score;
  scoreList.appendChild(li);
}

function clearScores() {
  localStorage.clear();
  location.reload();
}
