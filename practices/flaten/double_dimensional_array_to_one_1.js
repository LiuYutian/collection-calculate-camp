'use strict';

function double_to_one(collection) {
    var array = [];

    for(var i = 0; i < collection.length; i++) {
        if(collection[i].length === undefined){
            array[array.length] = collection[i];
        }else{
            for(var j = 0; j < collection[i].length; j++) {
                array[array.length] = collection[i][j];
            }
        }
    }

    return array;
}

module.exports = double_to_one;
