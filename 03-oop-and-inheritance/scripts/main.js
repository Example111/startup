/*
//Movie class
function Movie()
{
    this.listeners = [] ;
    this.attributes = {} ;
    this.attributes['state'] = 'idle' ;
}

Movie.prototype.play = function() {
	if ( this.get('state') != 'playing') {
		this.setChanged('playing') ;
	}
};
Movie.prototype.setChanged = function(state) {
	this.set('state',state ) ; 
	this.notifyListeners(state) ;
};

Movie.prototype.stop = function() {
	if ( this.get('state') != 'stopped') {
		this.setChanged('stopped') ;
	}
};
// Movie Listener support
Movie.prototype.addListener = function(listener) {
	this.listeners.push(listener) ;
};

Movie.prototype.removeListener = function(listener) {
	listeners.splice(listeners.indexOf(listener), 1);
};
Movie.prototype.notifyListeners = function(state) {
	console.log( 'Event : ' + state ) ;
		for(var i = 0; i < this.listeners.length ; i++){
			this.listeners[i].update(state,this);
		}
};


Movie.prototype.set = function(key,value) {
    this.attributes[key] = value ;
    
};


Movie.prototype.get = function(key) {
    return this.attributes[key] ;
    
};
//end Movie Class

//Movie Listener class


//end Movie Listener


*/

//Movie Revealing Module Pattern 


function MovieListener() {

};

MovieListener.prototype.update = function(state, movie) {
	if ( state === 'play') {
		console.log('playing ' + movie.get('title') ) ;
	}
	else if ( state === 'stop') {
		console.log( movie.get('title') + ' stopped') ;
	}

}


var Movie = (function () {
	

	//Private Members
	var attributes = {};
	var listeners = [];
	attributes['state'] = 'idle' ;


	var notifyListeners = function(state, movie) {
		for( var i = 0; i < listeners.length ; i++ ){
			listeners[i].update(state,movie) ;
		}				
	};

	var setChanged = function(state, movie) {
		movie.set('state', state );
		notifyListeners(state,movie) ;
	}

	var Movie = function () {
	};

	//Public Members
	Movie.prototype = {
		constructor: Movie,
		get: function (key){
			return attributes[key] ;
		},
		set: function (key,value){
			attributes[key] = value ;
		},

		play: function(){
			console.log('Event: Play');
			if ( this.get('state')!=='play' ) {
				setChanged( 'play',this);
			}
		},

		stop: function() {
			console.log('Event: Stop') ;
			if (this.get('state')!== 'stop'){
				setChanged('stop',this);
			}
		},
		removeListener: function() {
			listeners.splice(listeners.indexOf(listener), 1);
		},
		addListener: function (listener) {
			listeners.push(listener) ;
		}
	};
	return Movie ;
})();

//END MOVIE CLASS 

//Downloadable Movie
var DownloadableMovie  = function() {

}

DownloadableMovie.prototype = new Movie() ;

DownloadableMovie.prototype.download = function() {
	console.log('si papa')
};


//Extends and Social Mixin 
function extend(destination, source) {
	for (var k in source) {
		if (source.hasOwnProperty(k)) {
			destination[k] = source[k];
		}
	}
	return destination; 
}


var social = { 
	share: function(friendName) {
		console.log('sharing ' + this.get('title') + ' to ' + friendName ) ;

	},
	like : function(){

	}
};
extend(Movie.prototype,social) ;

//END SOCIAL MIXIN





var notifier = new MovieListener();

///ThreeHundred.addListener( notifier ) ;
DieHard.set('title', 'Die Hard') ;
DieHard.addListener(notifier) ;
console.log(DieHard.get('title') );
DieHard.download() ;
DieHard.play() ;
DieHard.play() ;
DieHard.stop() ;