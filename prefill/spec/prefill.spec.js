'use strict';
var prefill = require('../prefill');

describe('prefill', function(){
    it('should work for integers', function(){
        expect(prefill(3, 1)).toEqual([1,1,1]);
    });

    it('should work for strings', function(){
        expect(prefill(2, "abc")).toEqual(["abc", "abc"]);
    });

    it('should work recursively', function(){
        expect(prefill(3, prefill(2, '2d'))).toEqual([['2d','2d'],['2d','2d'],['2d','2d']]);
    });

    it('should through a TypeError if inputs are bad', function(){
        expect(prefill("xyz", 1)).toEqual(new TypeError('you idiot'));
    });

    it('should work if v is undefined', function(){
        expect(prefill(2)).toEqual([undefined, undefined]);
    });
});



/*
prefill(3,1) #=>[1,1,1]

prefill(2,"abc") #=> ['abc','abc']

prefill("1", 1) #=> [1]

prefill(3, prefill(2,'2d'))
#=> [['2d','2d'],['2d','2d'],['2d','2d']]

prefill("xyz", 1)
#=> throws TypeError with message "xyz is invalid"
*/
