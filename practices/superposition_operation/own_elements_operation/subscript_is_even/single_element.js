'use strict';
var single_element = function(collection){
    var array = [];

    for(var i = 1; i < collection.length; i++) {
        if(i % 2 != 0) {
            array.push(collection[i]);
        }
    }

    var objectArray = [];

    for(var i = 0; i < array.length; i++) {
        var exist = false;
        for(var j = 0; j < objectArray.length; j++) {
            if(array[i] === objectArray[j].num) {
                objectArray[j].count++;
                exist = true;
            }
        }

        if(!exist) {
            objectArray.push({
                num : array[i],
                count : 1
            })
        }
    }

    var resultArray = [];

    for(var i = 0; i < objectArray.length; i++) {
        if(objectArray[i].count === 1){
            resultArray.push(objectArray[i].num);
        }
    }

    return resultArray;
};
module.exports = single_element;
