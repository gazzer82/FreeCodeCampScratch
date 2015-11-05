function sumFibs(num) {
  var numbersArr = [1,1];
  while((numbersArr[numbersArr.length-1] + numbersArr[numbersArr.length-2]) <= num){
    numbersArr.push(numbersArr[numbersArr.length-1] + numbersArr[numbersArr.length-2]);
  }
  return numbersArr.reduce(function(previousValue, currentValue, index, array) {
    if((currentValue % 2) === 0){
      return previousValue;
    } else {
      return previousValue + currentValue;
    }
  });
}

console.log(sumFibs(1000));