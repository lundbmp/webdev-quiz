let timeCount = 60;
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

let testTimer = setInterval(function() {
    timeCount--;
    document.getElementById("timer").textContent = "Timer: " + timeCount;
    if(timeCount === 0) {
        document.getElementById("timer").textContent = "Timer: 0";
        clearInterval(testTimer);
        // additional logic will go here to kill the quiz
    }
}, 1000);

