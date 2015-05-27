'use strict';

function choose_common_elements(collection_a, collection_b) {
    var array = [];

    for (var i = 0; i < collection_a.length; i++) {
        for (var j = 0; j < collection_b.length; j++) {
            if(collection_b[j] === collection_a[i]) {
                array[array.length] = collection_a[i];
            }
        }
    }

    return array;
}

module.exports = choose_common_elements;
