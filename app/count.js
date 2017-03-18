exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
    count: function(start, end) {
        var current = start;
        console.log(current);

        var counter = setInterval(count, 100);

        function count() {
            if (current < end) {
                current++
                console.log(current);
            }
        };

        return {cancel: function(){
        	clearInterval(counter);
        	}
    	};
    }
};
