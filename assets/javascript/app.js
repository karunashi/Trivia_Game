var questions = [
{
    question: "Test?",
    choices: ["Abc", "aBc", "abC", "ABC"],
    correctAnswer: 1
}, 
{
    question: "Test?",
    choices: ["Abc", "aBc", "abC", "ABC"],
    correctAnswer: 2
}
];

var currentQues = 0; // Counter for which question user is on.
var correctAnswers = 0; // Counter for correct guesses
var gameOver = false; // Check for if game is over or not. ex: False = Game isn't over.

// Start-up when document is ready (webpage is fully loaded).
$(document).ready(function(){
	// If game isn't over then...
	if (gameOver === false) { 
		startQuestionRoll();
		
		$("#0, #1, #2, #3").on("click", function() {
		//Correct or incorrect check for selection
		if (id === questions[currentQues].correctAnswer) {
			correctAnswers++;
			currentQues++;
		}
		else { 
			$(".question").html("You're incorrect!");
			$(".choices").html("The answer is " + questions[currentQues].correctAnswer + "!");
		}
		})
		console.log(this)

	}
});

function startQuestionRoll() {
	console.log("Check - startQuestion") // Check to see that function worked.
	var question = questions[currentQues].question;
	var qChoices = questions[currentQues].choices.length;
	$(".question").html(question);

	for (var i = 0; i < qChoices; i++) {
		choice = questions[currentQues].choices[i];
		$("<div id ='"+i+"'>" + choice + "</div>").appendTo(".choices");
	}
};


