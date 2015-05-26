'use strict';

function collect_last_element(collection) {
    // var _ = require('../lodash/array');
    //
    // return _.last(collection);

    return collection[collection.length-1];
}

module.exports = collect_last_element;
