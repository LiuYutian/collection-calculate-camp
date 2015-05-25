'use strict';

function collect_last_element(collection) {
    var _ = require('../lodash/array');

    return _.last(collection);
}

module.exports = collect_last_element;
