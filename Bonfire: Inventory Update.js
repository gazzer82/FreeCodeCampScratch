function inventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr2.reduce(function(stockArr,stockItem){
        var updated = false;
        stockArr.forEach(function(item){
            if(item[1] == stockItem[1]){
                item[0] = stockItem[0] + item[0];
            updated = true;
            }
        });
        if (updated === false){
            stockArr.push(stockItem);
        }
        return stockArr;
    },arr1).sort(function(a,b){
        return (a[1].toUpperCase() > b[1].toUpperCase()) ? 1 : (a[1].toUpperCase() < b[1].toUpperCase()) ? -1 : 0;
    });
}

// Example inventory lists
var curInv = [
    [21, 'Bowling Ball'],
    [2, 'Dirty Sock'],
    [1, 'Hair Pin'],
    [5, 'Microphone']
];

var newInv = [
    [2, 'Hair Pin'],
    [3, 'Half-Eaten Apple'],
    [67, 'Bowling Ball'],
    [7, 'Toothpaste']
];

console.log(inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]));
console.log([[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'], [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']]);
/*
Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. 
Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.
*/

//assert.deepEqual(inventory([[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]), [[88, 'Bowling Ball'], [2, 'Dirty Sock'], [3, 'Hair Pin'], [3, 'Half-Eaten Apple'], [5, 'Microphone'], [7, 'Toothpaste']]);expected [ Array(6) ] to deeply equal [ Array(6) ]