/*  However, it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.
 */

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  // Using s = [2, 5, 7] would be invalid

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  return "Change to";
  // Only change code above this line
}
console.log(s);
console.log(editInPlace());
console.log(s);

// LATIHAN
console.log("LATIHAN");

const a = [1, 2, 3];
a[3] = 4;
a.push(5);
// a = [5, 4, 5]; // error karena menggunakan const tidak bisa reassignment variable identifier.

console.log(a);
