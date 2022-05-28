let timeCount = 100;
let questionCount = 0;
var testTimer;

let highScore = [];

let questionArray = [{
    question: "What is not a datatype in javascript?",
    a1: "float",
    a2: "number",
    a3: "string",
    a4: "boolean",
    answer: "float"
}, {
    question: "Which is a semantic html element?",
    a1: "<section>",
    a2: "<span>",
    a3: "<div>",
    a4: "<p>",
    answer: "<section>"
} , {
    question: "What do you enclose if else statements with?",
    a1: "{ }",
    a2: "[ ]",
    a3: "< >",
    a4: "( )",
    answer: "{ }"
} , {
    question: "Arrays can be used to store: ",
    a1: "objects",
    a2: "numbers",
    a3: "booleans",
    a4: "all of the above",
    answer: "all of the above"
} , {
    question: "How do you write to the console in javascript?",
    a1: "document.write",
    a2: "system.print",
    a3: "console.log",
    a4: "printf",
    answer: "console.log"
}];




// start quiz function
function startQuiz() {
    questionCount = 0;
    timeCount = 100;


    // initially set up the buttons
    let containerEl = document.getElementById("answer-form-container");
    for(let element = 1; element < 4; element++) {
        let buttonEl = document.createElement("button");

        buttonEl.id = "btn" + element;
        buttonEl.className = "btn";

        containerEl.appendChild(buttonEl);

    }
    displayQustion(questionArray[questionCounter()]);

    testTimer = setInterval(function() {
        timeCount--;
        document.getElementById("timer").textContent = "Timer: " + timeCount;
        if(timeCount === 0) {
            document.getElementById("timer").textContent = "Timer: 0";
            clearInterval(testTimer);
            // additional logic will go here to kill the quiz
        }
    }, 1000);

}

document.getElementById("answer-form-container").addEventListener("click", function(event) {
    let isButton = event.target.textContent; 
    let responseEl = document.getElementById("answer-response");

    if(event.target.className === "btn") {
        if(isButton === "Start") {
            startQuiz();
        } else if (checkAnswer(isButton)) {
            responseEl.textContent = "correct!";
            increaseCounter();
            if(questionCounter() === questionArray.length) { 
                endQuiz(); 
            } else {
                displayQustion(questionArray[questionCounter()]);
            }
        } else if (!checkAnswer(isButton)) { 
            responseEl.textContent = "incorrect!";
            increaseCounter();
            subtractScore();
            if(questionCounter() === questionArray.length) { 
                endQuiz(); 
            } else {
                displayQustion(questionArray[questionCounter()]);
            }
        }
    }


});

function questionCounter() {
    return questionCount;
}

function increaseCounter() {
    questionCount++;
}

function subtractScore() {
    timeCount -= 10;
}

function checkAnswer(isButton) {
    return isButton === questionArray[questionCount].answer;
}

// function to display object
function displayQustion(questionObj) {
    document.getElementById("container-text").textContent = questionObj.question;
    document.getElementById("btn0").textContent = questionObj.a1
    document.getElementById("btn1").textContent = questionObj.a2
    document.getElementById("btn2").textContent = questionObj.a3
    document.getElementById("btn3").textContent = questionObj.a4
}

function endQuiz() {
    let formContainerEl = document.getElementById("answer-form-container");
    let textContainerEl = document.getElementById("container-text");
    let initialsFormEl = document.createElement("FORM");
    let inputFormEl = document.createElement("INPUT");
    let formButtonEl = document.createElement("BUTTON");

    clearInterval(testTimer); 
    deleteButtons(formContainerEl);

    textContainerEl.textContent = "You finished with a score of: " + timeCount;
    initialsFormEl.setAttribute("id", "my-form");
    inputFormEl.setAttribute("type", "text");
    inputFormEl.setAttribute("value", "initials");
    formButtonEl.setAttribute("id", "form-btn");
    formButtonEl.setAttribute("class", "btn");
    formButtonEl.textContent = "Submit";

    formContainerEl.appendChild(initialsFormEl);
    document.getElementById("my-form").appendChild(inputFormEl);
    document.getElementById("my-form").appendChild(formButtonEl);

}

function saveHighscore() {

}

function loadHighscore() {
    highScore = JSON.parse(localStorage.getItem('highScores'));
}

function clearHighscore() {
    
}

function deleteButtons(containerEl) {
    for(let index = 0; index < 5; index++) {
        containerEl.removeChild(containerEl.lastChild);
    }
}

