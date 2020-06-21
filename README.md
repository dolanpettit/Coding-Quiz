# Coding-Quiz

The purpose of this exercise was to create a timed code quiz with multiple choice questions. The application contains html and css whose content is dynamically changed by my JavaScript code.

The first step in this assignment was creating my index.html file and all of the content within it. This had to contain the link to my highscores page, a timer, the starting screen "div", quiz questions "div", out of time "div", and lastly my ending screen "div", as well as the links to two of my .js files. Most of those are pretty self explanatory but as for the quiz contianer, that simply contained one question and 4 labels for the possible answers.

The next step was to make my highscores page. This was slightly more simple because the only requirements of this page is to display user scores, to be able to clear those scores, and to redirect to the starting screen.

After completing the .html files, I started on my questions.js file. This was relatively simple as all I had to do was create an array of objects, each of which containing the question key, choices key with an array of choices, and the answer key containing the index of the correct answer choice.

The bulk of this assignment was within the script.js file where there are quite a few functions at work. The first function I had to define was the showQuiz() function. This function changes the display of the start-screen to "none" and then instead changes the "quiz-container" display to "block" so that we can proceed with our actual quiz. The showQuiz() function is executed through an onClick event located on the start button within the index.html file.

The next function that is executed is the updateQuestions() function. The basic functionality behind this function is that once the quiz-container is loaded, so is the first question and set of answer choices. The computer keeps track of which questions object to display because of a variable called questionBeingAsked that is incremented everytime we select an answer.

The questionBeingAsked variable is being incremented within what is probably our most important function, the confirmAnswer() function. In this function, we can find the value attribute of our selected answer choice and run an if / else statement to check to see if the answer we selected has the same value as the correct answer index. If it does, time is not subtracted from the timer and you get a "Correct" notification. If the answer is incorrect, 10 seconds are subtracted from the timer and you get a "Wrong" notification. Once we get to the point where the varibale questionBeingAsked has a value of larger than or equal to the length of the questions array, we then proceed to the end screen where our results are displayed in the form of how much time you had left on the timer.

The final real function at work is the submitScore() function which is activated by an onClick event placed on the Submit button. This function utilizes localStorage by pushing the name and score object keys to the scores variable and then redirecting you to the highscores.html page.

This page shows your initials and score by running a for loop contained within the end.js file. For each occurence of a userScore, the computer creates a new "li" element and appends it to the scoreList. This page also gives you the ability to clear your scores and/or go back to the start screen of the quiz.

This has been an incredible assignment to work on because it's really given me a preview of the work required to build even the smallest of dynamic applications, and also a great intro into using localStorage. I'm very much looking forward to being able to implement Jquery into my code for the next assignment.
