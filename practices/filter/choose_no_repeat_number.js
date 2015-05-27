'use strict';

function choose_no_repeat_number(collection) {
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        var exist = false;

        for(var j = 0; j < array.length; j++) {
            if(collection[i] === array[j]) {
                exist = true;
            }
        }
        if(!exist) {
            array[array.length] = collection[i];
        }
    }

    return array;
}

module.exports = choose_no_repeat_number;
