/* NOTE : - harus menggunakan extensi .mjs.
          - jika menggunakan .js harus menambahkan "type": "module" di package.json.
*/

import { uppercaseString, lowercaseString } from "./21-export.mjs";
// Only change code above this line

console.log(uppercaseString("hello"));
console.log(lowercaseString("WORLD!"));
