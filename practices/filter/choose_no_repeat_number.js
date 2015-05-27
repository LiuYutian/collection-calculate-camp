'use strict';

function choose_no_repeat_number(collection) {
    var array = [];
    
    for(var i = 0; i < collection.length; i++) {
        if(collection[i] != collection[i+1]) {
            array[array.length] = collection[i];
        }
    }

    return array;
}

module.exports = choose_no_repeat_number;
