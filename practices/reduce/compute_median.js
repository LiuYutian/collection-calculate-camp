'use strict';

function compute_median(collection) {
    for(var i = 0; i < collection.length; i++) {
        for(var j = i; j < collection.length; j++) {
            if(collection[i] > collection[j]) {
                collection[i] = collection[i] + collection[j];
                collection[j] = collection[i] - collection[j];
                collection[i] = collection[i] - collection[j];
            }
        }
    }

    if(collection.length % 2 === 0) {
        return (collection[collection.length/2-1]+collection[collection.length/2])/2;
    }else{
        return collection[parseInt(collection.length/2)];
    }
}

module.exports = compute_median;
