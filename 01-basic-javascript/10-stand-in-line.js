// NOTE : queue atau first in first out

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    item = arr.shift();
    return item;
    // Only change code above this line
}
  
// Setup
let testArr = [1, 2, 3, 4, 5];
  
// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

console.log(testArr[4]);
console.log(nextInLine([], 5));
console.log(nextInLine([], 1));