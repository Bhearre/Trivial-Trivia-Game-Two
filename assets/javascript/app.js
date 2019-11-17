// create an object called qna to hold question and answer, with a correct answer inde and url to an image

var qna = [{
    question: "Question 1:  Pickleball was invented in:",
    answers: ["1884", "1954", "1965", "1997"],
    correctAnswerIndex: 2,
    image: "assets/images/4PicklesPlayingball.png"
}, {
    question: "Question 2:  The game as first played in:",
    answers: ["California", "Florida", "Washington", "New York"],
    correctAnswerIndex: 2,
    image: "assets/images/pickleballwitharmspng.png"
}, {

    question: "Question 3:  Pickleball was created by:",
    answers: ["Four Moms", "Three Dads", "Five Kids", "Twenty Dwarves"],
    correctAnswerIndex: 1,
    image: "assets/images/pickleWithPaddle.jpeg"
}, {
    question: "Question 4:  The reason the game got started was:",
    answers: ["Sputnik was launched", "The TV was broken", "They were drunk", "The kids were bored"],
    correctAnswerIndex: 3,
    image: "assets/images/4PicklesPlayingball.png"
}, {
    question: "Question 5:  The reason its called pickleball is:",
    answers: ["A founder owned a pickle factory", "A founder's dog name pickles kept stealing the ball", "The game was initially played with pickles", "The founders were pickled"],
    correctAnswerIndex: 1,
    image: "assets/images/pickle.jpg"
}, {
    question: "Question 6:  The composite pickleball paddle was invented by",
    answers: ["Kathleen White, an game aficionado", "Douglas Gerhardt, a computer engineer", "Arlen Parento, an engineer", "Dave Santos, an auto painter and repairman "],
    correctAnswerIndex: 2,
    image: "assets/images/Pickleball-Womanjpg.jpg"
}, {
    question: "Question 7:  A pickleball court is the the size of a:",
    answers: ["Cricket Field", "Tennis Court", "Doubles Badminton Court", "Basketball Court"],
    correctAnswerIndex: 2,
    image: "assets/images/Pickelball_Court_Diagram.png"
}, {
    question: "Question 8:  The number of people playing pickleball in the U.S. is approximately:",
    answers: ["Between 1,000 and 5,000", "500,000", "1,000,000", "2,500,000"],
    correctAnswerIndex: 3,
    image: "assets/images/pickleball-kids.jpg"
}, {
    question: "Question 9:  The non-volley zone in front of the net is known as:",
    answers: ["Death Valley", "The Zone of Error", "The Basement", "The Kitchen"],
    correctAnswerIndex: 3,
    image: "assets/images/Pickleball_ball.jpg"
}, {
    question: "Question 10:  The serve in pickleball must be made:",
    answers: ["Overhand with paddle above your head", "Underhand with paddle below your navel", "With left hand exclaiming: 'Pickle, Pickle, Pickle'", "Right handed on even days"],
    correctAnswerIndex: 1,
    image: "assets/images/paddles.jpg"
}, {
    question: "Question 11:  The number of pickleball courts in the U.S. is approximately:",
    answers: ["1,500,000", "50,000", "15,000", "567"],
    correctAnswerIndex: 2,
    image: "assets/images/pickleball.jpeg"
}, {
    question: "Question 12:  There is at least one court in each of:",
    answers: ["The States West of the Mississipi", "The States East of the Mississipi", "Every State except Alaska and North Dakota", "Every State"],
    correctAnswerIndex: 3,
    image: "assets/images/SantaPickleBaller.jpeg"
}
];

// create variable for question timer and one to link to the html
var timeLeft;
var timer = document.getElementById('timer');
var timerId;

// create variable to iterate through the object
var currentQuestionIndex = 0;
// create variable to hold the a value of the correct answer from tha answer array
var correctAnswerIndex = 0;
// create variables to keep score
var numCorrectAnswers = 0;
var numWrongAnswers = 0;
var numNoAnswers = 0;

// create game variables to link javascript to htms for questions, answers, message, and images
var questionText = document.getElementById("question");
var answer1Text = document.getElementById("answer1");
var answer2Text = document.getElementById("answer2");
var answer3Text = document.getElementById("answer3");
var answer4Text = document.getElementById("answer4");
var message = document.getElementById("message");
var imageText = document.getElementById("imageText");

// create variables for scoring that link html and javascipt
var numCorrectAnswersText = document.getElementById("numCorrectAnswers");
var numWrongAnswersText = document.getElementById("numWrongAnswers");
var numNoAnswersText = document.getElementById("numNoAnswers");

// create an initialize function for start and restart of the game
var initialize = function () {
    currentQuestionIndex = 0;
    correctAnswerIndex = 0;
    numCorrectAnswers = 0;
    numWrongAnswers = 0;
    numNoAnswers = 0;
    questionText.textContent = "";
    answer1Text.textContent = "";
    answer2Text.textContent = "";
    answer3Text.textContent = "";
    answer4Text.textContent = "";

    numWrongAnswersText.textContent = "Number of Wrong Answers:  " + numWrongAnswers;
    numCorrectAnswersText.textContent = "Number of Correct Answers:  " + numCorrectAnswers;
    numNoAnswersText.textContent = "Number of Unanswered Questions:  " + numNoAnswers;

    $("#answer1").hide();
    $("#answer2").hide();
    $("#answer3").hide();
    $("#answer4").hide();
    $("#question").hide();
    $("#start").show();
    currentQuestionIndex = 0;
};

// create a function to load the questions and answers
var loadQuestion = function () {
    //clear message
    message.textContent = "";

    //show the "next" question and four answers on the page
    questionText.textContent = qna[currentQuestionIndex].question;
    answer1.textContent = qna[currentQuestionIndex].answers[0];
    answer2.textContent = qna[currentQuestionIndex].answers[1];
    answer3.textContent = qna[currentQuestionIndex].answers[2];
    answer4.textContent = qna[currentQuestionIndex].answers[3];
    $("#answer1").show();
    $("#answer2").show();
    $("#answer3").show();
    $("#answer4").show();
    $("#question").show();
    $("#start").hide();
    // disable the buttons before clicks
    $("button").attr("disabled", false);
    // set the amount of time the user has to answer
    timeLeft = 12;
    // set timer id to countdown by one second
    timerId = setInterval(countdown, 1000);
    // call the countdown function
    countdown();
}

// function when user clicks an answer, evaluates its correctnes, and adds to the score
$(".answerButton").click(function () {
    timer.textContent = "";
    var chosenIndex = parseInt(this.value);
    $("button").attr("disabled", true);
    $("#imageHolder").html("<img src=" + qna[currentQuestionIndex].image + " width='200px'>");

    if (chosenIndex === qna[currentQuestionIndex].correctAnswerIndex) {
        numCorrectAnswers++;
        numCorrectAnswersText.textContent = "Number of Correct Answers:  " + numCorrectAnswers;
        message.textContent = "Correct! The answer indeed is " + qna[currentQuestionIndex].answers[qna[currentQuestionIndex].correctAnswerIndex];
        imageText.textContent = "Correct! The answer indeed is " + qna[currentQuestionIndex].answers[qna[currentQuestionIndex].correctAnswerIndex];

    }
    else {
        numWrongAnswers++;
        numWrongAnswersText.textContent = "Number of Wrong Answers:  " + numWrongAnswers;
        message.textContent = "Sorry, the answer actually is " + qna[currentQuestionIndex].answers[qna[currentQuestionIndex].correctAnswerIndex];
        imageText.textContent = "Sorry, the answer actually is " + qna[currentQuestionIndex].answers[qna[currentQuestionIndex].correctAnswerIndex];
    }
    currentQuestionIndex++;

    clearInterval(timerId);

    if (currentQuestionIndex < qna.length) {
        setTimeout(loadQuestion, 3000);
    }
    else {
        $("#answer1").hide();
        $("#answer2").hide();
        $("#answer3").hide();
        $("#answer4").hide();
        $("#question").hide();
        $("#start").show();;
    }

});


var countdown = function () {
    if (timeLeft === 0) {
        clearInterval(timerId);
        message.textContent = "Time's up!  The correct answer is " + qna[currentQuestionIndex].answers[qna[currentQuestionIndex].correctAnswerIndex];
        imageText.textContent = "Time's up!  The correct answer is " + qna[currentQuestionIndex].answers[qna[currentQuestionIndex].correctAnswerIndex];

        $("#imageHolder").html("<img src=" + qna[currentQuestionIndex].image + " width='200px'>");

        timer.textContent = "";
        numNoAnswers++;
        numNoAnswersText.textContent = "Number of Unanswered Questions:  " + numNoAnswers;

        currentQuestionIndex++;

        if (currentQuestionIndex < qna.length) {
            setTimeout(loadQuestion, 3000);
            //loadQuestion()
        }
        else {
            $("#answer1").hide();
            $("#answer2").hide();
            $("#answer3").hide();
            $("#answer4").hide();
            $("#question").hide();
            $("#start").show();;
        }

    } else {
        timer.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}


$("#start").on("click", function () {
    initialize()
    //currentQuestionIndex = 0;
    loadQuestion();
});

$(document).ready(function() {
    initialize()
})