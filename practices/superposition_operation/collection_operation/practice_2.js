'use strict';

function hybrid_operation_to_uneven(collection) {
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 != 0) {
            array[array.length] = collection[i] * 3 + 2;
        }
    }

    return array;
}

module.exports = hybrid_operation_to_uneven;
