function drop(arr, func) {
  var returnArr = arr;
  for(i=0;i<arr.length;i++){
    if(func(returnArr[i])){
      break;
    } else {
      returnArr.shift();
      i --;
    }
  }
  return returnArr;
}

console.log(drop([1, 2, 3, 4], function(n) {return n >= 3; }));

/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.
*/