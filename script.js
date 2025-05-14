function checkAnswer(questionId, hint, correct) {
    document.getElementById(`result_${questionId}`).innerText = correct ? "Richtig! ${hint}" : "Falsch!";
}