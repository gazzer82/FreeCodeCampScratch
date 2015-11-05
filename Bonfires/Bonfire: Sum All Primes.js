function sumPrimes(num) {
    var primeArray = findPrimes(num);
    return primeArray.reduce(function(previousValue, currentValue){
        return previousValue + currentValue;
    });
}

function createNewArray (num){
    return Array.apply(0,new Array(num-1)).map(function(element, index){
        return index+2;
    });
}

function findPrimes (num){
    var seedArray = createNewArray(num);
    var arrayIndex = 0;
    while(arrayIndex < seedArray.length-1){
        seedArray = sieveArray(arrayIndex, seedArray);
        arrayIndex ++;
    }
    return seedArray;
}
function sieveArray (arrayIndex, seedArray){
    var returnArray = seedArray.filter(
        function (value, index, array){
            if(value % seedArray[arrayIndex] === 0 && index > arrayIndex){
                return false;
            } else {
                return true;
            }
        }
    );
    return returnArray;
}

console.log(sumPrimes(10));
