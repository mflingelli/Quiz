let score = 0;

function checkAnswer(questionId, hint, correct) {
	if (correct) {
        score += 1;
    }
    document.getElementById(`result_${questionId}`).innerText = correct ? "Richtig! " + hint : "Falsch!";
}

function finishQuiz() {
    document.getElementById("endScreen").style.display = "block";
    document.getElementById("finalScore").innerText = `Deine Gesamtpunktzahl: ${score}`;
}

function restartQuiz() {
    score = 0;
    document.getElementById("endScreen").style.display = "none";
    document.getElementById("score").innerText = "Punkte: 0";
}
