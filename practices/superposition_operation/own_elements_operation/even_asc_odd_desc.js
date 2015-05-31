'use strict';
var even_asc_odd_desc = function(collection){
    for(var i = 0; i < collection.length; i++) {
        for(var j = i; j < collection.length; j++) {
            if(collection[i] > collection[j]){
                var temp = collection[i];
                collection[i] = collection[j];
                collection[j] = temp;
            }
        }
    }

    for(var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 === 0) {
            evenArray.push(collection[i]);
        }else {
            oddArray.push(collection[i]);
        }
    }

    for(var i = oddArray.length-1; i >= 0; i--) {
        evenArray.push(oddArray[i]);
    }

    return evenArray;
};
module.exports = even_asc_odd_desc;
