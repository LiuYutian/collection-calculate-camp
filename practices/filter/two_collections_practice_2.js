'use strict';

function choose_no_common_elements(collection_a, collection_b) {
    var _ = require("../lodash/array");

    return _.xor(collection_a, collection_b);
}

module.exports = choose_no_common_elements;
