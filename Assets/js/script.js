// Home page
var mainEl = document.querySelector("#main");
var timerEl = document.querySelector("#timer");
var timeLeft = 75;
var totalPoints = 0;
var end = false;

    // Global Functions for use in questions
var points = function() {
    totalPoints = totalPoints + 10;
    console.log("You have " + totalPoints + " points!");
}
var timer = function() {
    var timeInterval = setInterval(() => {
        if (end === false) {
            timerEl.textContent = timeLeft;
            timeLeft --;
            return timeLeft;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
    
    console.log("TIMER STARTED")
    if (end === true){
        timerEl.textContent = timeLeft;
    }
}

var start = function() {
    //div
var container = document.createElement("div");
container.className = "home-container"
mainEl.appendChild(container);

    // start page title
var homeHeader = document.createElement("h1");
homeHeader.className = "home-title";
homeHeader.textContent = "Coding Quiz Challenge";
container.appendChild(homeHeader);

    // start page paragraph
var homeParagraph = document.createElement("p");
homeParagraph.className = "home-text-p";
homeParagraph.textContent = "Try to answer the following code-related" +
" questions within the time limit. Keep in mind that incorrect answer will" +
" penalize your score/time by ten seconds!"
container.appendChild(homeParagraph);

    // start quick button
var startQuizBtn = document.createElement("button");
startQuizBtn.className = "home-btn";
startQuizBtn.textContent = "Start Quiz";
container.appendChild(startQuizBtn);

    // removes home page elements
startQuizBtn.addEventListener("click", event => {
    timer();
    startQuizBtn.remove();
    homeHeader.remove();
    homeParagraph.remove();
    questionOne();
});
}
start();

var highScores = function() {
        //div
    var highScoreContainer = document.createElement("div");
    highScoreContainer.className = "hs-container";
    mainEl.appendChild(highScoreContainer);

    // high Score TITLE
    var title = document.createElement("h1");
    title.className = "high-score-title";
    title.textContent = "High Scores";
    highScoreContainer.appendChild(title);

    //displays high scores
        // displays player scores
    var initals = localStorage.getItem("initals");
    var score = localStorage.getItem("score");
    var leaderboardScore = document.createElement("p");
    leaderboardScore.className = "leaderboard-score";
    leaderboardScore.textContent = "1." + initals + " - " + score;
    highScoreContainer.appendChild(leaderboardScore);


        //div
    var leaderboard = document.createElement("div");
    leaderboard.className = "leaderboard";
    highScoreContainer.appendChild(leaderboard);
        //button "GO BACK"
    var goBack = document.createElement("button");
    goBack.className = "go-back-btn";
    goBack.textContent = "Go Back";
    goBack.addEventListener("click", event => {
        totalPoints = 0;
        end = false;
        timeLeft = 75;
        highScoreContainer.remove();
        start();
    })
    leaderboard.appendChild(goBack);
        // button "CLEAR HIGH SCORE"
    var clearHighScore = document.createElement("button");
    clearHighScore.className = "clear-highScore";
    clearHighScore.textContent = "Clear High Scores";
    clearHighScore.addEventListener("click", event => {
        //remove score from local storage
        localStorage.removeItem("initals")
        //remove initals from local storage
        localStorage.removeItem("score")
        //remove score from leaderboard
        leaderboardScore.remove();
    })
    leaderboard.appendChild(clearHighScore);
}

var enterScore = function() {
    var doneContainer = document.createElement("div");
    doneContainer.className = "done-container";
    mainEl.appendChild(doneContainer);
        // TITLE
    var done = document.createElement("h1");
    done.textContent = "All Done!";
    done.className = "done-title";
    doneContainer.appendChild(done);
        // SCORE
    var score = document.createElement("h4");
    score.textContent = "Your final score is " + totalPoints;
    score.className = "score";
    doneContainer.appendChild(score); 

    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    doneContainer.appendChild(inputContainer);

        // LABEL
    var label = document.createElement("label");
    label.textContent = "Enter Initials:";
    label.className = "label";
    label.setAttribute("for", "input");
    inputContainer.appendChild(label);
        // INPUT
    var initalInput = document.createElement("Input");
    initalInput.className = "score-input";
    initalInput.setAttribute("id", "input")
    initalInput.setAttribute("name", "input");
    initalInput.setAttribute("type", "text");
    inputContainer.appendChild(initalInput);
        //SUBMIT
    var submit = document.createElement("button");
    submit.textContent = "Submit";
    submit.className = "submit-btn";
    submit.addEventListener("click", event => {
            // retreives user input
        var initals = document.getElementById("input").value;
        //store score in local storage
        localStorage.setItem("initals", initals);
        //store initals in local storage
        localStorage.setItem("score", totalPoints);
            // remove page content
        doneContainer.remove();
        //move to next page
        highScores();
    })
    inputContainer.appendChild(submit);
}

var questionOne = function() {
    // execute if wrong answer is choosen
var removeWrong = function() {
    timeLeft = timeLeft - 10;
    questionContainer.remove();
    questionTwo();
    console.log("The answer you picked was wrong");
}

var questionContainer = document.createElement("div");
questionContainer.className = "question-container";
mainEl.appendChild(questionContainer);

    //Question One
var question = document.createElement("h1");
question.className = "question";
question.textContent = "What is JavaScript?";
questionContainer.appendChild(question);

    //Question Answers
var answerContainer = document.createElement("div");
answerContainer.className = "answer-container";
questionContainer.appendChild(answerContainer);
        // Answer 1
var answerOne = document.createElement("button");
answerOne.className = "answer-One";
answerOne.textContent = "1. JavaScript is an assembly language used to make the website interactive";
answerContainer.appendChild(answerOne);
answerOne.addEventListener("click", event => {
    removeWrong();
})
        // Answer 2
var answerTwo = document.createElement("button");
answerTwo.className = "answer-Two";
answerTwo.textContent = "2. JavaScript is a compiled language used to make the website interactive";
answerContainer.appendChild(answerTwo);
answerTwo.addEventListener("click", event => {
    removeWrong();
})
        // Answer 3
var answerThree = document.createElement("button");
answerThree.className = "answer-Three";
answerThree.textContent = "3. JavaScript is a scripting language used to make the website interactive";
answerContainer.appendChild(answerThree);
answerThree.addEventListener("click", event => {
    questionContainer.remove();
    questionTwo();
    console.log("You picked the right answer");
    points();
})
        // Answer 4
var answerFour = document.createElement("button");
answerFour.className = "answer-Four";
answerFour.textContent = "4. None of the mentioned";
answerContainer.appendChild(answerFour);
answerFour.addEventListener("click", event => {
    removeWrong();
})
console.log("Question One");
}

var questionTwo = function() {
        // execute if wrong answer is choosen
    var removeWrong = function() {
        questionThree();
        questionContainer.remove();
        timeLeft = timeLeft - 10;
    }

    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        // Question Two
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Which of the following is correct about JavaScript?";
    questionContainer.appendChild(question);

        // Question Answers 2
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // Answer 1
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. JavaScript is Assembly-language";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        removeWrong();
    });
            //Answer 2
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. JavaScript is an Object-Oriented language";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    });
            // Answer 3
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. JavaScript is an Object-Based language";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        questionContainer.remove();
        questionThree();
        console.log("You picked the right answer");
        points();
    });
            // Answer 4
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. JavaScript is a High-level language";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    });
}

var questionThree = function() {
    // execute if wrong answer is choosen
    var removeWrong = function() {;
        questionContainer.remove();
        enterScore();
        console.log("The answer you picked was wrong");
        end = true;
    }
  
    var questionContainer = document.createElement("div");
    questionContainer.className = "question-container";
    mainEl.appendChild(questionContainer);

        // Question Five
    var question = document.createElement("h1");
    question.className = "question";
    question.textContent = "Was this quiz helpful?";
    questionContainer.appendChild(question);

        // Question Five Answers
    var answerContainer = document.createElement("div");
    answerContainer.className = "answer-container";
    questionContainer.appendChild(answerContainer);
            // Answer 1
    var answerOne = document.createElement("button");
    answerOne.className = "answer-One";
    answerOne.textContent = "1. YES!!";
    answerContainer.appendChild(answerOne);
    answerOne.addEventListener("click", event => {
        points();
        questionContainer.remove();
        enterScore();
        console.log("You picked the right answer");
        end = true;
    })
            //Answer 2
    var answerTwo = document.createElement("button");
    answerTwo.className = "answer-Two";
    answerTwo.textContent = "2. NO";
    answerContainer.appendChild(answerTwo);
    answerTwo.addEventListener("click", event => {
        removeWrong();
    })
            // Answer 3
    var answerThree = document.createElement("button");
    answerThree.className = "answer-Three";
    answerThree.textContent = "3. No";
    answerContainer.appendChild(answerThree);
    answerThree.addEventListener("click", event => {
        removeWrong();
    })
            // Answer 4
    var answerFour = document.createElement("button");
    answerFour.className = "answer-Four";
    answerFour.textContent = "4. no";
    answerContainer.appendChild(answerFour);
    answerFour.addEventListener("click", event => {
        removeWrong();
    })
}
