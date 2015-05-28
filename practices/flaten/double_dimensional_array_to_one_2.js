'use strict';

function double_to_one(collection) {
    var arrayUnidimensional = [];
    var result = {};
    var array = []

    for(var i = 0; i < collection.length; i++) {
        if(collection[i].length === undefined){
            arrayUnidimensional[arrayUnidimensional.length] = collection[i];
        }

        for(var j = 0; collection[i].length!=undefined && j < collection[i].length ; j++) {
            arrayUnidimensional[arrayUnidimensional.length] = collection[i][j];
        }

    }

    for(var i = 0; i < arrayUnidimensional.length; i++) {
        var exist = false;

        for(var j = 0; j < array.length; j++) {
            if(arrayUnidimensional[i] === array[j]) {
                exist = true;
                break;
            }
        }
        if(!exist) {
            array[array.length] = arrayUnidimensional[i];
        }
    }

    return array;
}

module.exports = double_to_one;
