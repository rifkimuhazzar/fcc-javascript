// NOTE : import export default tidak perlu {} dan namanya bertindak sebagai variable.

import subtract, { a } from "./24-export-fallback-with-export-default.mjs";
// import subtract, * as ex from "./24-export-fallback-with-export-default.mjs";
// Only change code above this line

console.log(subtract(7, 4));
console.log(a);
