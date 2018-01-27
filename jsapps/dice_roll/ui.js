// function to print the value
function printValue(number){
	var placeholder = document.getElementById('placeholder');
	placeholder.innerHTML = number;
}

// Catch the element on which the event will trigger 
var button = document.getElementById("button");

// Create function to do the task when event triggered
button.onclick = function() {
	// var val = document.getElementById('textbox_id').value;
  var result = dice.roll();
  printValue(result);
};