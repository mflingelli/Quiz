let score = 0;

function checkAnswer(questionId, hint, correct) {
	if (correct) {
        score += 1;
    }
    document.getElementById(`result_${questionId}`).innerText = correct ? "Richtig! " + hint : "Falsch!";
	document.getElementById("score").innerText = `Richtige Antworten: ${score}`;
}