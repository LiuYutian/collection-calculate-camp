'use strict';
var number_map_to_word = function(collection){
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        array[array.length] = MapChar(collection[i]);
    }

    return array;
};

function MapChar(n) {
    if(n>26) {
        var carry = parseInt(n/26);
        if(n%26 === 0) {
            return String.fromCharCode(carry-1+96)+String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(carry+96)+String.fromCharCode(n%26+96);
        }
    }else {
        if(n%26 === 0) {
            return String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(n%26+96);
        }
    }
}

module.exports = number_map_to_word;
