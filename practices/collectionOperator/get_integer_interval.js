'use strict';

function get_integer_interval(number_a, number_b) {
    var array = [];

    if(number_a < number_b) {
        for(var i = number_a; i <= number_b; i++) {
            array.push(i);
        }
        return array;
    }

    if(number_a > number_b) {
        for(var i = number_a; i >= number_b; i--){
            array.push(i);
        }
        return array;
    }

    return [number_a];
}

module.exports = get_integer_interval;
