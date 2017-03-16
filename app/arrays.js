exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // var len = arr.length;
    // for(var i = 0; i < len; i++){
    //   if(arr[i] === item){
    //     return i;
    //   }
    // }
    // return -1;

    return arr.indexOf(item);
  },

  sum: function(arr) {
    // var len = arr.length;
    // var total = 0;
    // for(var i = 0; i < len; i++){
    //   total+= arr[i];
    // }
    // return total;

    return arr.reduce(function(acc, val){return acc+val;})
  },

  remove: function(arr, item) {
    // while(true){
    //   var index = arr.indexOf(item);
    //     if(index === -1){
    //       return arr;
    //     } else {
    //       arr.splice(index, 1);
    //     }
    // }

    return arr.filter(function(d){return d !== item;})
  },

  removeWithoutCopy: function(arr, item) {
    while(true){
      var index = arr.indexOf(item);
        if(index === -1){
          return arr;
        } else {
          arr.splice(index, 1);
        }
    }
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    // arr.splice(0, 1);
    // return arr;

    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    // var len = arr2.length;
    // for(var i = 0; i < len; i++){
    //   arr1.push(arr2[i]);
    // }
    // return arr1;

    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var len = arr.length;
    var count = 0;
    for(var i = 0; i < len; i++){
      if(arr[i] === item){
        count++
      }
    }
    return count;
  },

  duplicates: function(arr) {
    var len = arr.length;
    var result = [];
    arr.sort();
    for(var i = 0; i < len; i++){
      if(arr[i] === arr[i + 1]){
        if (result.indexOf(arr[i]) === -1){
          result.push(arr[i]);
        }
      } 
    }
    return result;

    //***there has got to be a better way***
    //map the items - as you see the items you add them to you map and then check the map each time and if something is in there add it to the result
  },

  square: function(arr) {
    // var len = arr.length;
    // var result = [];
    // for(var i = 0; i < len; i++){
    //   result.push(Math.pow(arr[i], 2));
    // }
    // return result;

    return arr.map(function(x){return Math.pow(x, 2);});
  },

  findAllOccurrences: function(arr, target) {
    var len = arr.length;
    var result = [];
    for(var i = 0; i < len; i++){
      if(arr[i] === target){
        result.push(i);
      }
    }
    return result;
  }
};
