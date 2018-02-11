// Create Question
var questions = [
	new Question('What is our presidents Name?', ['Hasina', 'Khaleda'], 'Hasina'),
	new Question('How Long after the election happen?', ['4 Years', '5 Years'], '5 Years')
];

//Create quiz
var quiz = new Quiz(questions);

//Display Quiz
quizUI.displayQuiz();