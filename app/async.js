exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {

  	return new Promise(function(resolve, reject){
  		if(value){
  			resolve(value);
  		} else{
  			reject(Error("You didn't pass anything to the damn function."));
  		}
  	});

  },

  manipulateRemoteData: function(url) {
  	
  	return new Promise(function(resolve, reject){

  		if(url) {
	  		$.get(url, function(data) {
		  		var arr = []
		  		for(person in data.people){
		  			arr.push(data.people[person].name);
		  		}
		  		arr.sort();
		  		resolve(arr);
	  		});
  		} else{
  			reject(Error("You didn't pass anything to the damn function."));
  		}
  		
	  });
  }
};
