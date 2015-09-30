
(function(){
	
	function slopyFunction() {
		console.log('this == window ---> '+ (this == window));		
	}
	console.log('in slopy function "this" is equals to "window"');
	slopyFunction();
		
	
	function strictFunction(){
		'use strict';
		console.log('this === undefined ---> ' + (this === undefined));
	}
	console.log('in strict function "this" is equals "undefined"');
	strictFunction();


//constructors
	function Point(x, y){
	'use strict'	 
		
		this.x = x;
		this.y = y;				
	}
	console.log('strict is usefull in preventing invoking constructors as a function, Point(1) -->');
	try {
		Point(1, 3);	
	} catch (error) {
		console.error(error);
	}
		
	console.log('new Point(1, 3) --> ' + JSON.stringify(new Point(1, 3)) );
				
})();