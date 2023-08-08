/* 
- With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

- The rest parameter eliminates the need to use the arguments object and allows us to use array methods on the array of parameters passed to the function howMany.
*/

const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(sum(6, 7, 8, 9, 10));
