define([
  'jquery'
  
], function(){

	var success = function(position){
		var s = $('#status').get(0);
	  
	  	if (s.className == 'success') {
	   		return;
	 	 }
	  
	  	s.innerHTML = "found you!";
	  	s.className = 'success';
	  
	  	var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
	  	var myOptions = {
		   	zoom: 15,
		   	center: latlng,
		    mapTypeControl: false,
		    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
		    mapTypeId: google.maps.MapTypeId.ROADMAP
	  	};
	  	var map = new google.maps.Map($("#mapcanvas").get(0), myOptions);
	  
	  	var marker = new google.maps.Marker({
			    position: latlng, 
			    map: map, 
			    title:"You are here! (at least within a "+position.coords.accuracy+" meter radius)"
	  		});
	}

	function error(msg) {
  		var s = document.querySelector('#status');
  		s.innerHTML = typeof msg == 'string' ? msg : "failed";
 	    s.className = 'fail' ;
	}
	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(success, error);
	} else {
 		 error('not supported');
	}

  
});