'use strict';
var map_to_three_multiples = function(collections){
    var _ = require('../lodash/collection');

    return _.map(collections, timesThree);
};

function timesThree(n) {
    return n * 3;
}

module.exports = map_to_three_multiples;
