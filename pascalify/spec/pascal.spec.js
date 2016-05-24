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
});
