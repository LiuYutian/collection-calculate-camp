'use strict';

function get_intersection(collection_a, collection_b) {
    // var _ = require('../lodash/array');
    // return _.intersection(collection_b, collection_a);

    var array = [];

    for(var i = 0; i < collection_b.length; i++) {
        for(var j = 0; j <collection_a.length; j++) {
            if(collection_a[j] === collection_b[i]) {
                array.push(collection_a[j]);
            }
        }
    }

    return array;
}

module.exports = get_intersection;
