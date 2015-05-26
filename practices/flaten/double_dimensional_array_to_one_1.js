'use strict';

function double_to_one(collection) {
    var _ = require('../lodash/array');
    return _.flatten(collection);
}

module.exports = double_to_one;
