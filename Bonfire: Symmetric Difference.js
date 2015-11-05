function sym1(args) {
    var arrays = Array.prototype.slice.call(arguments);
    return arrays.reduce(function(masterArr,arr){
       return masterArr.concat(arr);
    },[]).
    filter(function(element, index, array){
        return array.indexOf(element) == index && array.lastIndexOf(element) == index;
    });
}

function sym2(args) {
    var arrays = Array.prototype.slice.call(arguments);
    return arrays.reduce(function(previousArr,nextArr){
        return previousArr.concat(nextArr).
            filter(function(element,index,array){
               return (previousArr.indexOf(element) == -1 && nextArr.indexOf(element) != -1) || (previousArr.indexOf(element) != -1 && nextArr.indexOf(element) == -1);
            });
    },[]).reduce(function(arr,item){
        if (arr.indexOf(item) == -1)
        arr.push(item);
        return arr;
    },[]);
}

console.log(sym2([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));