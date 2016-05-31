'use strict';
var recursivePrefill = require('../recursivePrefill');


describe('recursivePrefill', function(){
    it('should work for integers', function(){
        expect(recursivePrefill(3, 1)).toEqual([1,1,1]);
    });

    it('should work for strings', function(){
        expect(recursivePrefill(2, "abc")).toEqual(["abc", "abc"]);
    });

    it('should work recursively', function(){
        expect(recursivePrefill(3, recursivePrefill(2, '2d'))).toEqual([['2d','2d'],['2d','2d'],['2d','2d']]);
    });

    it('should through a TypeError if inputs are bad', function(){
        expect(recursivePrefill("xyz", 1)).toEqual(new TypeError('you idiot'));
    });

    it('should work if v is undefined', function(){
        expect(recursivePrefill(2)).toEqual([undefined, undefined]);
    });
});
