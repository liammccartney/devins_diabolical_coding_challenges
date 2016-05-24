'use strict';

function pascalify(number){
    var depth = 0;
    var triangle = [];
    while(triangle.length < number){
        var level;
        if(depth === 0){
            triangle.push([1]);
        } else{
            triangle.push(createLevel(triangle[depth - 1], depth + 1));
        }
        depth++;
    }
    return triangle;
}

function getAboveValue(array, index){
    return array[index] !== undefined ? array[index] : 0;
}

function createLevel(previousLevel, length){
    var level = [];
    for(var i = 0; i < length; i++){
        var leftAboveValue = getAboveValue(previousLevel, i - 1);
        var aboveValue = getAboveValue(previousLevel, i);
        level.push(leftAboveValue + aboveValue);
    }
    return level;
}

module.exports = pascalify;

