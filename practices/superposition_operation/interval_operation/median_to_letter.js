'use strict';

function median_to_letter(collection) {
    for(var i = 0; i < collection.length; i++) {
        for(var j = i; j < collection.length; j++) {
            if(collection[i] > collection[i]){
                var temp = collection[i];
                collection[i] = collection[j];
                collection[j] = temp;
            }
        }
    }

    if(collection % 2 === 0) {
        return MapChar(parseInt((collection[collection.length/2]+collection[collection.length/2-1])/2));
    }
    return MapChar(parseInt(collection[parseInt(collection.length/2)]));

}

function MapChar(n) {
    if(n>26) {
        var carry = parseInt(n/26);
        if(n%26 === 0) {
            return String.fromCharCode(carry-1+96)+String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(carry+96)+String.fromCharCode(n%26+96);
        }
    }else {
        if(n%26 === 0) {
            return String.fromCharCode(26+96);
        }
        else {
            return String.fromCharCode(n%26+96);
        }
    }
}

module.exports = median_to_letter;
