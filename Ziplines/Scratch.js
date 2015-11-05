function largestPairSum(numbers)
{
  numbers = numbers.sort(function(prev,next){
    return next > prev;
  });
  return numbers[0]+numbers[1];
}

function isValidIPOld(str){
  var addr = str.split('.');
  var isValid = true;
  if (addr.length === 4){
    addr.forEach(function(number){
      if((!(number >= 0 && number <= 255)) || number.split('')[0] === '0' || (number.split('')[1] === '0' && number.split('')[1] === '0')){
        isValid = false;
      }
    });
    return isValid;
  } else {
    return false;
  }
}

function isValidIP(str){
  console.log(str);
  return new RegExp(/(^[0-9]\.|^[1-9][0-9]\.|^1[0-9][0-9]\.|^2[0-4][0-9]\.|^25[0-5]\.)([0-9]\.|[1-9][0-9]\.|1[0-9][0-9]\.|2[0-4][0-9]\.|25[0-5]\.)([0-9]\.|[1-9][0-9]\.|1[0-9][0-9]\.|2[0-4][0-9]\.|25[0-5]\.)([0-9]$|[1-9][0-9]$|1[0-9][0-9]$|2[0-4][0-9]\.|25[0-5]$)/ig).test(str);
}

function songDecoder(song){
  return song.split('WUB').filter(function(item){
    return item.length > 0;
  }).reduce(function(store,item,index,array){
      return (index == 0) ? item : store + ' ' + item;
  })
}

var numbers = [1, 2, 3, 4, 5];

Array.prototype.square = function(){
  return this.map(function(object){
    return object*object;
  });
}

Array.prototype.cube = function(){
  return this.map(function(object){
    return object*object*object;
  });
}

Array.prototype.average = function(){
  if(this.length){
    var allNum = true;
    var total = this.reduce(function(total,current){
      if (typeof current != 'number'){
        allNum = false;
        return total;
      } else {
      return total + current;
      }
    },0);
    return total/this.length;
  } else {
    return NaN;
  }
}

Array.prototype.even = function(){
  return this.filter(function(object){return object % 2 === 0})
}

function power(s) {
  return s.reduce(function(stack,current,index,array){
    //stack = stack || [0] ;
    stack.push(array.reduce(function(stackb,currentb,indexb,arrayb){
      stackb.push([stackb + currentb]);
      return stackb;
    },[]))
    return stack;
  },[[]])
}

console.log(power([1,2,3]));
