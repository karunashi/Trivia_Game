var questions = [{
    question: "Test?",
    choices: ["Abc", "aBc", "abC", "ABC"],
    correctAnswer: 1
}, {
    question: "Test?12313123",
    choices: ["aa", "abb", "acc", "Add"],
    correctAnswer: 2
}, {
    question: "NAH",
    choices: ["Abc", "aBc", "abC", "ABC"],
    correctAnswer: 2
}];

var currentQues = 0; // Counter for which question user is on.
var correctAnswers = 0; // Counter for correct guesses
var gameOver = false; // Check for if game is over or not. ex: False = Game isn't over.
var timer = 30;
var timerId;


// Start-up when document is ready (webpage is fully loaded).
$(document).ready(function() {
    // If game isn't over then...
    if (gameOver === false) {
        startQuestionRoll();
        var status = $("<img>")
        $(".0, .1, .2, .3").on("click", function() {
            //Correct or incorrect check for selection. Used == instead of === since == checks for same answers, but not same type.
            if ($(this).attr("class") == questions[currentQues].correctAnswer) {
                correctAnswers++;
                currentQues++;
                console.log("You're correct!")
                console.log(correctAnswers)
                console.log(currentQues)
                clearInterval(timerId)
                timer = 30;
                $(".choices").empty() // Everything seems to work, but it won't retain the listen event.
                // Click event for divs disappear after one right answer.
                startQuestionRoll() 

            } else {
                $(".question").html("You're incorrect!");
                $(".choices").html("The answer is " + questions[currentQues].correctAnswer + "!");
                status.attr("src", "assets/images/lose.gif")
                $(".stat").append(status)
                clearInterval(timerId)
                timer = 30;


            }
           if (currentQues >= questions.length) {
           	    $(".question").html("Game Over!");
                $(".choices").html("You got " + correctAnswers + " out of " + currentQues);
                status.attr("src", "assets/images/gameover.gif")
                $(".stat").append(status)
                gameOver = true;
                clearInterval(timerId)
                $(".timer").html("")
                timer = 30;

           }
        })
    }
});

function startQuestionRoll() {
    console.log("Check - startQuestion") // Check to see that function worked.
    var question = questions[currentQues].question;
    var qChoices = questions[currentQues].choices.length;
    $(".question").html(question);

    for (var i = 0; i < qChoices; i++) {
        choice = questions[currentQues].choices[i];
        $("<div class ='" + i + "'>" + choice + "</div>").appendTo(".choices");
    }
    time()
};

function failed() {
    clearInterval(timerId);
    var status = $("<img>")
    $(".question").html("Ran out of time!");
    $(".choices").html("");
    status.attr("src", "assets/images/timeout.gif")
    $(".stat").append(status);
    currentQues++;
    return;
}

function time() {
    timer = 30;
    timerId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $(".timer").html("<h3>" + timer + " </h3>");
    if (timer === 0) {
        failed()
        return;
    }
}
