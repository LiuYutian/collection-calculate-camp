'use strict';
var even_group_calculate_average = function(collection){
    var array = [];
    var resultArray = [];

    for(var i = 0; i < collection.length; i++) {
        if(array[collection[i].toString().length-1] === undefined){
            array[collection[i].toString().length-1] = new Array();
        }
        if(collection[i] % 2 === 0) {
            array[collection[i].toString().length-1].push(collection[i]);
        }
    }

    for(var i = 0; i < array.length; i++) {
        var sum = 0;

        if(array[i] === undefined){
            continue;
        }

        for(var j = 0;j < array[i].length; j++) {
            sum += array[i][j];
        }

        if(array[i].length != 0){
            resultArray.push(sum/array[i].length);
        }
    }

    for(var i = 0; i < resultArray.length; i++){
        if(resultArray[i] != 0){
            return resultArray;
        }
    }

    return 0;
};
module.exports = even_group_calculate_average;
