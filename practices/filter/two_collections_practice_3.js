'use strict';

function choose_divisible_integer(collection_a, collection_b) {
    var _ = require('../lodash/lodash');

    var array = [];

    for(var i = 0; i < collection_b; i++) {
        array.push(_.findLast(collction_a, function(n) {
            return n % collection_b[i] == 0;
        }))
    }

    return array;
}

module.exports = choose_divisible_integer;
