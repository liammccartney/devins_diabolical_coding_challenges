'use strict';

var pascalify = require('../pascal');

describe('pascalify', function(){
    it('should return [[1]] when the paramter is 1', function(){
        expect(pascalify(1)).toEqual([[1]]);
    });

    it('should work for 2', function(){
        expect(pascalify(2)).toEqual([[1], [1,1]]);
    });

    it('should work for 5', function(){
        expect(pascalify(5)).toEqual([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
    });

    it('should work for any number', function(){
        var randNumber = Math.floor((Math.random() * 20) + 1);
        var triangle = pascalify(randNumber);
        var randIndex = Math.floor((Math.random() * triangle.length) + 1);
        var randLevel = triangle[randIndex];
        var levelSum = randLevel
            .reduce(function(prevVal, currVal) { return prevVal + currVal});
        expect(levelSum).toEqual(Math.pow(2, randIndex));
    });
});
