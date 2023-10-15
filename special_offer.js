
let questions = [
    { text: "Have you shopped with us at least 5 times before?", offer: "10% on your next purchase" },
    { text: "Are you currently a student in the DFW area?", offer: "Free Shipping on a minimum order of $20" },
    { text: "Do your come under the category of 'Low Income Person'?", offer: "Free Premium membership for 1 month!" }
];

let currentQuestionIndex = 0;
let startTime;
let offers = [];
let flightData;

function setupQuiz() {
    document.getElementById("startButton").addEventListener("click", startQuiz);
    document.getElementById("nextButton").addEventListener("click", nextQuestion);
    document.getElementById("skipButton").addEventListener("click", skipQuestion);
}


window.onload = function() {
    setupQuiz();
}

function startQuiz() {
    startTime = Date.now();

    document.getElementById("startButton").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    displayQuestion();
}

function displayQuestion() {
    document.getElementById("question").innerText = questions[currentQuestionIndex].text;
}

function nextQuestion() {
    if (document.getElementById("yes").checked && questions[currentQuestionIndex].offer) {
        offers.push(questions[currentQuestionIndex].offer);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function skipQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    let timeSpent = Math.round((Date.now() - startTime) / 1000);

    let result = `You qualify for the following offers because of your answers: ${offers.join(", ")}<br>You spent ${timeSpent} seconds on the questionnaire.`;

    document.getElementById("result").innerHTML = result;
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
}



