let timeCount = 60;

let testTimer = setInterval(function() {
    timeCount--;
    document.getElementById("timer").textContent = "Timer: " + timeCount;
    if(timeCount === 0) {
        document.getElementById("timer").textContent = "Timer: 0";
        clearInterval(testTimer);
        // additional logic will go here to kill the quiz
    }
}, 1000);