'use strict';

function getChar(number) {
    if(number>26) {
        var carry = parseInt(number/26);
        if(number%26 === 0) {
            return String.fromCharCode(carry-1+96)+String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(carry+96)+String.fromCharCode(number%26+96);
        }
    }else {
        if(number%26 === 0) {
            return String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(number%26+96);
        }
    }
}

function get_letter_interval_2(number_a, number_b) {
    var array = [];

    if(number_a < number_b) {
        for(var i = number_a; i <= number_b; i++) {
            array.push(getChar(i));
        }
        return array;
    }

    if(number_a > number_b) {
        for(var i = number_a; i >= number_b; i--){
            array.push(getChar(i));    }
        return array;
    }

    array.push(getChar(number_a));
    return array;
}
module.exports = get_letter_interval_2;
