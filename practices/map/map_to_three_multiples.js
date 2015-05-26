'use strict';
var map_to_three_multiples = function(collections){
    var _ = require('../lodash/collection');

    return _.map(collections, TimesThree);
};

function TimesThree(n) {
    return n * 3;
}

module.exports = map_to_three_multiples;
