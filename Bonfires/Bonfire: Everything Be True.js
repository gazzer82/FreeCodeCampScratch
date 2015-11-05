function every(collection, pre) {
  var correctCount = 0;
  collection.forEach(function(toCheck){
    if(toCheck.hasOwnProperty(pre)){
      correctCount ++;
    }
  })
  if(correctCount === collection.length){
    return true;
  } else {
    return false;
  }
}

console.log(every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex'));