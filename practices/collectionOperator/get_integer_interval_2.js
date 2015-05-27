'use strict';

function get_integer_interval_2(number_a, number_b) {
    if(number_a < number_b) {
        return aLessThanb(number_a, number_b);
    }

    if(number_a > number_b) {
        return aGreaterb(number_a, number_b);
    }

    if(number_a % 2 === 0){
        return [number_a];
    }else{
        return [];
    }
}


function aLessThanb(number_a, number_b) {
    var array = [];

    for(var i = number_a; i <= number_b; i++) {
        if(i%2 === 0){
            array.push(i);
        }
    }

    return array;
}

function aGreaterb(number_a, number_b) {
    var array = [];

    for(var i = number_a; i >= number_b; i--){
        if(i%2 === 0){
            array.push(i);
        }
    }

    return array;
}

module.exports = get_integer_interval_2;
