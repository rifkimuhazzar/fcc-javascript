/* NOTE : - ada 2 cara untuk export.
          - harus menggunakan extensi .mjs.
          - jika menggunakan .js harus menambahkan "type": "module" di package.json.
*/
// console.log("Hello world"); // untuk test file 20-module-script.html

export const a = "Contoh"; // cara 1

const uppercaseString = (string) => {
  return string.toUpperCase();
};

const lowercaseString = (string) => {
  return string.toLowerCase();
};

export { uppercaseString, lowercaseString }; //cara 2
