function checkAnswer(questionId, correct) {
    document.getElementById(`result_${questionId}`).innerText = correct ? "Richtig!" : "Falsch!";
}