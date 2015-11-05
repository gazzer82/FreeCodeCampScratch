function drawer(price, cash, cid) {
  var denominations = {
    'PENNY': 1,
    'NICKEL': 5,
    'DIME': 10,
    'QUARTER': 25,
    'ONE': 100,
    'FIVE': 500,
    'TEN': 1000,
    'TWENTY': 2000,
    'ONE HUNDRED': 10000
  };

  var cidTotal = cid.reduce(function(count, denomination){
    return Number(count)+Number(denomination[1])*100;
  },0);
  
  var change = Number(cash)*100-Number(price)*100;
  
  if (cidTotal == change){
    return 'Closed';
  } else if (cidTotal < change){
    return 'Insufficient Funds';
  } else {
    return calculateChange();
  }
  
  function calculateChange(){
    console.log(change);
    return cid.reduceRight(function(changeArray,next){
      changeArray = changeArray ? changeArray : [];
      var currentDivisor = denominations[next[0]];
      var currencyCount = next[1]*100/currentDivisor;
      var usedCurrencyCount = 0;
      while (change >= 0 && change-currentDivisor >= 0 && currencyCount > 0){
        change -= currentDivisor;
        currencyCount -- ;
        usedCurrencyCount += denominations[next[0]];
        console.log('remainder = ' + change);
      }
      if(usedCurrencyCount > 0){
        changeArray.push([next[0],usedCurrencyCount/100]);
      }
      return changeArray;
    },[]);
  }
  
  return cidTotal;
}

// Example cash-in-drawer array:
// [['PENNY', 1.01],
// ['NICKEL', 2.05],
// ['DIME', 3.10],
// ['QUARTER', 4.25],
// ['ONE', 90.00],
// ['FIVE', 55.00],
// ['TEN', 20.00],
// ['TWENTY', 60.00],
// ['ONE HUNDRED', 100.00]]

console.log(drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]));

/*
Design a cash register drawer function that accepts purchase price as the first argument, payment as the second argument, and cash-in-drawer (cid) as the third argument.

cid is a 2d array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

expect(drawer(19.50, 20.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]])).to.be.a('array');

assert.deepEqual(drawer(3.26, 100.00, [['PENNY', 1.01], ['NICKEL', 2.05], ['DIME', 3.10], ['QUARTER', 4.25], ['ONE', 90.00], ['FIVE', 55.00], ['TEN', 20.00], ['TWENTY', 60.00], ['ONE HUNDRED', 100.00]]), 96.74

[['TWENTY', 60.00], ['TEN', 20.00], ['FIVE', 15], ['ONE', 1], ['QUARTER', 0.50], ['DIME', 0.20], ['PENNY', 0.04] ], 97.1

'return correct change with multiple coins and bills');

*/