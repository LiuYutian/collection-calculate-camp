'use strict';

function average_to_letter(collection) {
    var sum = 0;

    for(var i = 0; i < collection.length; i++) {
        sum += collection[i];
    }

    return String.fromCharCode(Math.ceil(sum/collection.length)+96);
}

module.exports = average_to_letter;
