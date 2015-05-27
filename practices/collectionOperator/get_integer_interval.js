'use strict';

function get_integer_interval(number_a, number_b) {
    var array = [];

    if(number_a < number_b) {
        return aGreaterb(number_a, number_b);
    }

    if(number_a > number_b) {
        return aLessThanb(number_a, number_b);
    }

    return [number_a];
}

function aGreaterb(number_a, number_b) {
    var array = [];

    for(var i = number_a; i <= number_b; i++) {
        array.push(i);
    }

    return array;
}

function aLessThanb(number_a, number_b) {
    var array = [];

    for(var i = number_a; i >= number_b; i--){
        array.push(i);
    }

    return array;
}

module.exports = get_integer_interval;
