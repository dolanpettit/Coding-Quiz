let startTime = 60;
let questionBeingAsked = 0;
let userScore = 0;
let globalTimeout;

function retryQuiz() {
  questionBeingAsked = 0;
  userScore = 0;
  startTime = 60;
  document.getElementById("out-time").style.display = "none";
  showQuiz();
}

function showQuiz() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  let timeout = setInterval(function () {
    reduceTimer();
  }, 1000);

  globalTimeout = timeout;

  function reduceTimer() {
    startTime -= 1;
    let timer = document.getElementById("timer");
    timer.innerText = startTime;
    if (startTime <= 0) {
      clearInterval(timeout);
      timer.innerText = "You've ran of time!";

      document.getElementById("quiz-container").style.display = "none";
      document.getElementById("out-time").style.display = "block";
    }
  }
}

function updateQuestions() {
  document.getElementById("question").innerText =
    questions[questionBeingAsked].question;
  document.getElementById("label-1").innerText =
    questions[questionBeingAsked].choices[0];
  document.getElementById("label-2").innerText =
    questions[questionBeingAsked].choices[1];
  document.getElementById("label-3").innerText =
    questions[questionBeingAsked].choices[2];
  document.getElementById("label-4").innerText =
    questions[questionBeingAsked].choices[3];
}

function confirmAnswer(option) {
  var answerFeedback = document.getElementById("answer-feedback");
  if (option.getAttribute("value") == questions[questionBeingAsked].answer) {
    // userScore++;
    answerFeedback.innerText = "Correct!";
  } else {
    answerFeedback.innerText = "Wrong!";
    startTime -= 10;
    document.getElementById("timer").innerText = startTime;
  }

  fadeInEffect(answerFeedback, 100);

  questionBeingAsked += 1;
  if (questionBeingAsked >= questions.length) {
    // quiz complete
    clearInterval(globalTimeout);
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("end-screen").style.display = "block";
    document.getElementById("quiz-result").innerText = startTime;
    return;
  }

  if (startTime <= 0) {
    outofTime();
  } else {
    updateQuestions();
  }
}

function submitScore() {
  if (localStorage.getItem("Scores") == null) {
    localStorage.setItem("Scores", JSON.stringify([]));
  }
  var scores = JSON.parse(localStorage.getItem("Scores"));
  var initials = document.getElementById("initials-input").value;
  if (initials === "" || initials.length > 3) {
    alert("Please only input initials");
  } else {
    scores.push({ name: initials, score: startTime });
    localStorage.setItem("Scores", JSON.stringify(scores));
    location.replace("highscores.html");
  }
}

function fadeOutEffect(fadeTarget, timeOut) {
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
      fadeTarget.style.opacity = 0;
    }
  }, timeOut);
}

function fadeInEffect(fadeTarget, timeOut) {
  var fadeEffect = setInterval(function () {
    fadeTarget.style.opacity = 1;
    if (fadeTarget.style.opacity < 1) {
      fadeTarget.style.opacity += 0.1;
    } else {
      clearInterval(fadeEffect);
      fadeOutEffect(fadeTarget, 50);
    }
  }, timeOut);
}

updateQuestions();
