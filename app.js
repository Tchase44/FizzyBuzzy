$(document).ready(function() {
	// body...
	var choice = prompt("pick a number from 1 to 100...");
		 
	var limit = parseInt(choice,10);
		


	for (var i = 1; i < limit+1; i++) {
		if(i % 3 == 0 && i % 5 == 0){
			console.log("Bang!");
  			$('body').append("<p>Bang!</p>");
    	} else if (i % 5 ==0){
    		console.log("Buzz");
    		$('body').append("<p>Buzz</p>");
  		} else if (i % 3 == 0) {
  			console.log("Fizz");
    		$('body').append("<p>Fizz</p>");
  		}else{
  			console.log(i);
  			$('body').append("<p>"+i+"</p>");
  		};
  	};
});
