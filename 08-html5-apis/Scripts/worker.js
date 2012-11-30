define([
  'jquery'
  
], function(){

	var worker= new Worker("scripts/worker_script.js");
	worker.onmessage = function (event) { 
		$("#worker").html(event.data); 
	};
  
});