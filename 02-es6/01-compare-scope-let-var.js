/* NOTE : - jika menggunakan var maka scopenya global.
          - scope var global dan local (hanya di dalam function).
          - scope let global dan local (block, statement, expression).
*/

function checkScope() {
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}

checkScope();
