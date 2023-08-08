/* NOTE : radix atau basis yang biasa digunakan
    - binary / 2          = 0 - 1
    - oktal / 8           = 0 - 7
    - decimal / 10        = 0 - 9
    - hexadecimal / 16    = 0 - 9 dan A - F
    - hexatridecimal / 36 = 0 - 9 dan A - Z
*/

function convertToInteger(str) {
    return parseInt(str, 2);
}

// covert biner to decimal
console.log(convertToInteger("10011"));
console.log((1 * 2**4) + (0 * 2**3) + (0 * 2**2) + (1 * 2**1) + (1 * 2**0));