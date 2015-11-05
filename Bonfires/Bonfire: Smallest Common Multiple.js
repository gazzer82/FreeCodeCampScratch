function smallestCommons(arr) {
    var sortedArr = arr.sort();
    var numbersArr = createNewArray(sortedArr[0],sortedArr[1]);
    var factorsArr = [];
    var returnFactors = [];
    for(var m=0;m<numbersArr.length;m++){
      factorsArr.push(calculateFactors(numbersArr[m]));
    }
    for(var i=0;i<sortedArr[1];i++){
        var count = 0;
        for(var j=0;j<factorsArr.length;j++){
            if(factorsArr[j][i+1] > count){
                    count = factorsArr[j][i+1];
                }
        }
        for(var k=1;k<=count;k++){
            returnFactors.push(i+1);
        }
    }
    return returnFactors.reduce(function(previous, current){
        return previous*current;
    });
}


function calculateFactors(num){
    var primes = {};
    var primesArray = [];
    var tempNum = num;
    while(tempNum%2 === 0 && tempNum >= 1){
        tempNum = tempNum/2;
        if(!primes.hasOwnProperty('2')){
            primes['2'] = 0;
        }
        primes['2'] ++;
        primesArray.push(2);
    }
    for(var i=3;i<tempNum;i+=2){
        while(tempNum%i === 0){
            if(!primes.hasOwnProperty(i)){
                primes[i] = 0;
            }
            primes[i] ++;
            primesArray.push(i);
            tempNum = tempNum/i;
        }
    }
    if(tempNum>2){
        if(!primes.hasOwnProperty(tempNum)){
                primes[tempNum] = 0;
            }
            primes[tempNum] ++;
            primesArray.push(tempNum);
    }
    return primes;
}

function createNewArray (startNum, endNum){
    return Array.apply(0,new Array((endNum+1)-startNum)).map(function(element, index){
        return index+startNum;
    });
}

console.log(smallestCommons([1,13]));


/*
I'll give some hints
First, I call the least common multiple of a and b lcm(a, b)
Second lcm(a, b, c) = lcm(a, lcm(b, c)
The last point introduces a recursion relation
If we call the greatest common divisor of a and b gcd(a, b)
then we can write lcm(a, b) = a*b/gcd(a, b)
You understand what I'm getting at?
*/

function gcd(a,b){
  var min;

  if(a>b)
    min = b;
  else
    min = a;

  while(min>=1){
    if( a%min === 0 && b%min === 0 )
      break;
    min--;
  }

  return min;
}

function lcm(a,b){
  return ( a * b )/gcd(a,b);
}

function smallestCommons(arr) {
  var lower, upper;
  var lcmOut = 0;
  if( arr[0]>arr[1]){
    upper = arr[0];
    lower = arr[1];
  }else{
    upper = arr[1];
    lower = arr[0];
  }


  lcmOut = lcm(upper-1, upper);
  upper = upper - 2;

  while(upper >= lower){
    lcmOut = lcm(upper, lcmOut);
    upper--;
  }

  return lcmOut;
}


smallestCommons([1,5]);