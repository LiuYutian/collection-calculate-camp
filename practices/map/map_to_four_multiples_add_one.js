'use strict';
var map_to_four_multiples_add_one = function(collection){
    var _ = require('../lodash/collection');
  return _.map(collection, timesFour);
};

function timesFour(n) {
    return n*4+1;
}

module.exports = map_to_four_multiples_add_one;
