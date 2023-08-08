function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum) {
        let myArrRange = rangeOfNumbers(startNum, endNum - 1);
        myArrRange.push(endNum);
        return myArrRange;
    } else {
        return [];
    }
};
console.log(rangeOfNumbers(10, 20))

// LATIHAN
function range(min, max) {
    if (max < min) {
        return [];
    } else {
        let arrayRange = range(min, max - 1);
        arrayRange.push(max);
        return arrayRange;
    }
}
console.log(range(1, 5));