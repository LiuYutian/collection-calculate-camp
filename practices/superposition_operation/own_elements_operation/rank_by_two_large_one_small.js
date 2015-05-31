'use strict';
function rank_by_two_large_one_small(collection){
    var resultarray = [];

    for(var i = 0; i < collection.length; i++) {
        for(var j = i; j < collection.length; j++) {
            if(collection[i] > collection[j]) {
                var temp = collection[i];
                collection[i] = collection[j];
                collection[j] = temp;
            }
        }
    }

    for(var i = 0; i < collection.length-2; i += 3) {
        var temp = collection[i];
        collection[i] = collection[i+1];
        collection[i+1] = collection[i+2];
        collection[i+2] = temp;
    }

    return collection;
}
module.exports = rank_by_two_large_one_small;
