// NOTE : the spread operator only works in-place, like in an argument to a function or in an array literal.

const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;

arr2 = [...arr1]; // Change this line

console.log(arr2);

// LATIHAN
const myArr = [10, 30, 20];
const maxValue = Math.max(...myArr);

console.log(maxValue);
