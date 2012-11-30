define([
  'jquery'
  
], function(){

	var  handleDragOver = function(event) {
		   	event.stopPropagation();
		    event.preventDefault();
		    event.dataTransfer.dropEffect = 'copy'; 
	};

	var handleFileSelect = function(event) {
		console.log(event);
		event.stopPropagation();
		event.preventDefault() ;
		var files = event.dataTransfer.files; 
		var result = [];
		for (var i = 0, f; f = files[i]; i++) {

				result.push( '<li>' + escape(f.name) + '|' + f.type || 'undefined' + '| - ',
	        f.size + ' bytes, last modified: ',
	        f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'undefined' + '</li>' ) ;
		}

		$('#fileList').append(result) ;
	};

 	return { 
 	handleDragOver:handleDragOver,
 	handleFileSelect:handleFileSelect
 };
  
});