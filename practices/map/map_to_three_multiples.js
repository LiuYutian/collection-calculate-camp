'use strict';
var map_to_three_multiples = function(collections){
    return map(collections, even);
}

function even(value) {
    return value * 3;
}

function map(collections, fun) {
    var array = [];

    for (var i = 0; i < collections.length; i++) {
        array.push(fun(collections[i]));
    }

    return array;
}

module.exports = map_to_three_multiples;
