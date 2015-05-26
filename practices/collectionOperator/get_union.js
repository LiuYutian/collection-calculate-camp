'use strict';

function get_union(collection_a, collection_b) {
    // var _  = require('../lodash/array');
    //
    // return _.union(collection_a, collection_b);

    for(var i = 0; i < collection_b.length; i++) {
        collection_a.push(collection_b[i]);
    }

    var array = [];

    for(var i = 0; i < collection_a.length; i++){
        var exist = false;
        for(var j = 0; j < array.length; j++) {
            if(collection_a[i] == array[j]) {
                exist = true;
                break;
            }
        }
        if(!exist) {
            array.push(collection_a[i]);
        }
    }

    return array;
}

module.exports = get_union;
