/* NOTE : - harus menggunakan extensi .mjs.
          - jika menggunakan .js harus menambahkan "type": "module" di package.json.
*/

import * as stringFunctions from "./21-export.mjs";
// Only change code above this line

console.log(stringFunctions.uppercaseString("hello"));
console.log(stringFunctions.lowercaseString("WORLD!"));
