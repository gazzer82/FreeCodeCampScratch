function permAlone2(str) {
    var returnArrFinal = str.split("").reduce(function(returnArr,item,index,array){
        var tempArr = array.slice();
        tempArr.splice(index,1);
        var letterArray = premGen(item,tempArr).map(function(y){
                return y.map(function(z){
                    z.unshift(item);
                    return z
                });
            });
        returnArr = returnArr.concat.apply(returnArr, letterArray);
        return returnArr;
  },[]);
  console.log(returnArrFinal);
  return returnArrFinal.reduce(function(count,string){
    var patt = new RegExp(/(\w)(\1+)/);
    if(patt.test(string)){
        return count;
    }else{
        return count + 1;
    }
  },0);
}

function premGen(previous,arr){
    if(arr.length === 1){
        return arr;
    } else {
        var concatArr = arr.reduce(function(returnArr,item,index,array){
            var tempArr = array.slice();
            tempArr.splice(index,1);
            var toBeProcessed = premGen(item,tempArr);
            for (var i=0;i<toBeProcessed.length;i++){
                if(Array.isArray(toBeProcessed[i])){
                    toBeProcessed[i].unshift(item);
                } else {
                    toBeProcessed = [item,toBeProcessed[i]];
                }
            }
            returnArr.push(toBeProcessed);
            return returnArr;
        },[]);
        return concatArr;
    }
}

function permAlone(str){
    var inputArray = str.split("")
    return inputArray.reduce(function permute(res, item, key, arr) {
        return res.concat(arr.length > 1 && arr.slice(0, key)
        .concat(arr.slice(key + 1))
        .reduce(permute, [])
        .map(function(perm) {
            console.log(perm);
            return [item].concat(perm); })  || item);
    }, [])
    .map(function(itemToStringify){
        return itemToStringify.join('');
    })
    .reduce(function(count,string){
        var patt = new RegExp(/(\w)(\1+)/);
        if(patt.test(string)){
            return count;
        }else{
            return count + 1;
        }
    },0);
}


//alert(JSON.stringify(result));

console.log(JSON.stringify(permAlone('abc')));

/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters.

For example, 'aab' should return 2 because it has 6 total permutations, but only 2 of them don't have the same letter (in this case 'a') repeating.

expect(permAlone('aab')).to.equal(2);expected 'aab' to equal 2
expect(permAlone('aaa')).to.equal(0);expected 'aaa' to equal 0
expect(permAlone('aabb')).to.equal(8);expected 'aabb' to equal 8
expect(permAlone('abcdefa')).to.equal(3600);expected 'abcdefa' to equal 3600
expect(permAlone('abfdefa')).to.equal(2640);expected 'abfdefa' to equal 2640
expect(permAlone('zzzzzzzz')).to.equal(0);expected 'zzzzzzzz' to equal 0

abc
acb
bca
bac
cba
cab

abc 
acb 
bac 
bca 
cab 
cba 

*/