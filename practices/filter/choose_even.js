'use strict';

function choose_even(collection) {
    var _ = require('../lodash/array');

    return _.remove(collection, function(n) {
        return n % 2 === 0;
    });
}

module.exports = choose_even;
