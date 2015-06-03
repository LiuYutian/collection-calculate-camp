'use strict';

function hybrid_operation_to_uneven(collection) {
    var _ = require('../../../myLodash.js');

    var filterArray = _.filter(collection, function(n){
        return n % 2 != 0;
    });

    var mapArray = _.map(filterArray, function(n){
        return n * 3 + 5;
    });

    return _.reduce(mapArray, function(a, b){
        return a + b;
    });

    var array = [];
    var sum = 0;

    for(var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 != 0) {
            sum += collection[i] * 3 + 5;
        }
    }

    return sum;
}

module.exports = hybrid_operation_to_uneven;
