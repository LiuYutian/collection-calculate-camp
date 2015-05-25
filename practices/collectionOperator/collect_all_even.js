'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var _ = require('../lodash/array');

  collection = _.remove(collection, function(n) {
      return n % 2 === 0;
  });

  return collection;
}

module.exports = collect_all_even;
