var quizUI = {
	displayQuiz: function(){
		if(quiz.hasEnded()) {
			this.dScore();
		} else {
			this.dQuestion();
			this.dChoices();
			this.dProgress();
		}
	},
	dQuestion: function() {
		this.toHtml('question', quiz.getCurrentQuestion().text);
	},
	dChoices: function() {
		var choices = quiz.getCurrentQuestion().choices;

		for(var i = 0; i< choices.length; i++) {
			this.toHtml('choice'+ i, choices[i]);
			this.guessControl('guess'+ i, choices[i]);
		}
	},
	dScore: function(){
		var endMsg = '<h1>Game Over</h1>';
		endMsg += '<h2> Your score is: ' +quiz.score + ' </h2>';
		this.toHtml('quiz', endMsg);
	},
	toHtml: function(id, text) {
		var elm = document.getElementById(id);
		elm.innerHTML = text;
	},
	guessControl: function(id, guess) {
		var btn = document.getElementById(id);
		btn.onclick = function() {
			quiz.guess(guess);
			quizUI.displayQuiz();
		};
	},
	dProgress: function() {
		var currentQuestionNumber = quiz.currentQuestionIndex + 1;
		this.toHtml('progress', 'Question ' + currentQuestionNumber + ' of '+ quiz.questions.length);
	}
};