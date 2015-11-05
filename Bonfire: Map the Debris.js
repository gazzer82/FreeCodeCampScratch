function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var returnArr = [];
  arr.forEach(function(body){
    var returnObject = {};
    returnObject.name = body.name;
    returnObject.orbitalPeriod = Math.round((Math.PI* 2)*Math.sqrt((Math.pow(body.avgAlt+earthRadius, 3) / GM)));
    returnArr.push(returnObject);
  });
  return returnArr;
}

console.log(orbitalPeriod([{name : "sputkin", avgAlt : 35873.5553}]));