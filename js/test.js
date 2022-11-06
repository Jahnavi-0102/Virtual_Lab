var formElement = document.forms['fgietkinghcoders'];

formElement.onsubmit = function fgietkinghcoderstest(){
	var total = 5;
	var marks = 0;
	
	// Get User Input
	var q1 = document.forms["fgietkinghcoders"]["q1"].value,
	    q2 = document.forms["fgietkinghcoders"]["q2"].value,
	    q3 = document.forms["fgietkinghcoders"]["q3"].value,
	    q4 = document.forms["fgietkinghcoders"]["q4"].value;
         q5 = document.forms["fgietkinghcoders"]["q5"].value;
	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === null || eval('q'+i) === ''){
			alert('Opps! You missed question number '+ i);
			return false;
		}
	}
	
	// Set Correct Answers
	var answers = ["b","d","c","d","d"];
	
	// Check answer
	for(i = 1; i <= total;i++){
		if(eval('q'+i) === answers[i - 1]){
			marks++;
		}
	}
	
	// Result
	var results = document.getElementById('result');
	results.innerHTML = '<h3>You scored <span>'+marks+'</span> out of <span>'+total+'</span></h3>';
	
	return false;
}