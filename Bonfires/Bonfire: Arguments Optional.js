function add(a,b) {
  if(typeof a == 'number' & typeof b == 'number'){
      return a+b;
  }else{
      if (typeof a == 'number' && b === undefined){
          return function(num2){
              if(typeof num2 == 'number'){
                return a+num2;
              } else {
                  return undefined;
              }
          };
      } else {
          return undefined;
      }
  }
}

console.log(add(2)([3]));

/*
Create a function that sums two arguments together. If only one argument is provided, return a function that expects one additional argument and will return the sum.
*/