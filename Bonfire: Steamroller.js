function steamroller(arr) {
  var returnArr = [];
  for (var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      if(arr[i].length >0){
        returnArr = returnArr.concat(flattenArray(arr[i]));
      }
    } else {
      returnArr.push(arr[i]);
    }
  }
  return returnArr;
}

function flattenArray (arr){
  var returnArr = [];
  for (var i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      if(arr[i].length >0){
        returnArr = returnArr.concat(flattenArray(arr[i]));
      }
    } else {
      returnArr.push(arr[i]);
    }
  }
  return(returnArr);
}

console.log(steamroller([1, [2], [],[3, [[4]]]]));