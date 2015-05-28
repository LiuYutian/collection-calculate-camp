'use strict';

function even_to_letter(collection) {
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        if(collection[i] % 2 === 0){
            array[array.length] = String.fromCharCode(collection[i]+96);
        }
    }
    
    return array;
}

module.exports = even_to_letter;
