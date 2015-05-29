'use strict';
var calculate_median = function(collection){
    for(var i = 0; i < collection.length; i++) {
        for(var j = i; j < collection.length; j++) {
            if(collection[i] > collection[j]) {
                var temp = collection[i];
                collection[i] = collection[j];
                collection[j] = temp;
            }
        }
    }

    if(collection.length % 2 === 0) {
        return parseInt((collection[collection.length/2]+collection[collection.length/2-1])/2);
    }else{
        return collection[parseInt(collection.length/2)];
    }
};
module.exports = calculate_median;
