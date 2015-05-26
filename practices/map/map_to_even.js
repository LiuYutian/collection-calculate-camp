'use strict';
function map_to_even(collection){
  var _ = require('../lodash/collection');

  return _.map(collection, TimesTwo);
}

function TimesTwo(n) {
    return n * 2;
}

module.exports = map_to_even;
