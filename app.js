$(document).ready(function() {
	// body...
	for (var i = 1; i < 101; i++) {
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
  	// $('div').append('div').text(i);
});
