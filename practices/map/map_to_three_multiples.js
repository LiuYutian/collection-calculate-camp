'use strict';

var map_to_three_multiples = function(collections){
    return map(collections, executor);
}

function executor(n) {
    return n * 3;
}

function map(collections, executor){
    var array = [];

    for(var i = 0; i < collections.length; i++) {
        array.push(executor(collections[i]));
    }

    return array;
}



module.exports = map_to_three_multiples;
