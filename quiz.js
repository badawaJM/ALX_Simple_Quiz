function checkAnswer() {
    let correctAnswer = "4"; // The correct answer to the quiz
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Retrieve the user's answer
    
    let feedback = document.getElementById('feedback'); // Select the feedback element
    
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done."; // Correct answer feedback
    } else {
        feedback.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
