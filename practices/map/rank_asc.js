'use strict';
var rank_asc = function(collection){
    if(collection.length === 0 || collection.length === 1) {
        return collection;
    }

    for(var i = 0; i < collection.length; i++) {
        for(var j = i; j < collection.length; j++) {
            if(collection[i] < collection[j]) {
                collection[i] = collection[i] + collection[j];
                collection[j] = collection[i] - collection[j];
                collection[i] = collection[i] - collection[j];
            }
        }
    }

    return collection;
}
module.exports = rank_asc;
