
function recursivePrefill(n, v, array){
    var array = array || [];

    if(parseInt(n) != n) return new TypeError('you idiot');

    if(array.length < n){
        array.push(v);
        return recursivePrefill(n, v, array);
    }else{
        return array;
    }

}

module.exports = recursivePrefill;
