exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    var str1 = str + ", ";
    return function(str2){
      return str1 + str2;
    }
  },

  makeClosures: function(arr, fn) {
    for(var i = 0; i < arr.length; i++){
      arr[i] = function(){
        return fn(arr[i]);
      }
    }
    return arr;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
