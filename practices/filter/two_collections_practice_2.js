'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var result = {};
    var array = [];

    for(var i = 0; i <collection_b.length;i++) {
        collection_a.push(collection_b[i]);
    }

    for(var i=0; i<collection_a.length; i++) {
        result[[collection_a[i]]] = result[[collection_a[i]]]||0;
        result[collection_a[i]]++;
    }

    for(var key in result) {
        if(result[key] === 1) {
            array[array.length] = key;
        }
    }

    return array;
}

module.exports = choose_no_common_elements;

