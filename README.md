# Coding-Quiz

The purpose of this exercise was to create a timed code quiz with multiple choice questions. The application contains html and css whose content is dynamically changed by my JavaScript code.

The first step in this assignment was creating my index.html file and all of the content within it. This had to contain the link to my highscores page, a timer, the starting screen <div>, quiz questions <div>, out of time <div>. and lastly my ending screen <div> as well as the links to two of my .js files. Most of those are pretty self explanatory but as for the quiz contianer, that simply contained one question and 4 labels for the possible answers.

The next step was to make my highscores page. This was slightly more simple because the only requirements of this page is to display user scores, to be able to clear those scores, and to redirect to the starting screen.

After completing the .html files, I started on my questions.js file. This was relatively simple as all I had to do was create an array of objects, each of which containing the question key, choices key with an array of choices, and the answer key containing the index of the correct answer choice.

The bulk of this assignment was within the script.js file where there are quite a few functions at work. The first function I had to define was the showQuiz() function. This function changes the display of the start-screen to "none" and then instead changes the "quiz-container" display to "block" so that we can proceed with our actual quiz. The showQuiz() function is executed through an onClick event located on the start button within the index.html file.

The next function that is executed is the updateQuestions() function. The basic functionality behind this function is that once the quiz-container is loaded, so is the first question and set of answer choices. The computer keeps track of which questions object to display because of a variable called questionBeingAsked that is incremented everytime we select an answer.
