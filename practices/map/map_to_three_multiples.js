'use strict';
var map_to_three_multiples = function(collections){
    var array = [];

    for (var i = 0; i < collections.length; i++) {
        array[array.length] = collections[i] * 3;
    }

    return array;
}

module.exports = map_to_three_multiples;
