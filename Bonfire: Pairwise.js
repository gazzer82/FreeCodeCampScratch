function pairwise(arr, arg) {
    var skip = [];
    var indexes = [];
    if(arr.length === 0){
        return 0;
    }
    for(i=0;i<arr.length;i++){
        if(skip.indexOf(i) === -1){
            for(j=i+1;j<arr.length;j++){
                if(skip.indexOf(j) === -1){
                    if ((arr[i] + arr[j]) === arg){
                        skip.push(i);
                        skip.push(j);
                        indexes.push(i+j);
                        break;
                    } 
                }
            }
        }
    }
    console.log(indexes);
    console.log(skip);
    return indexes.reduce(function(previous, current){
        return previous+current;
    });
}


console.log(pairwise([1, 3, 2, 4], 4));