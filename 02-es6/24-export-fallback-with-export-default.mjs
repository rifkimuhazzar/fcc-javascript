/* NOTE : - Since export default is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file.
          - you cannot use export default with var, let, or const.
          - bisa bersama beberapa export biasa juga, tapi tetap export default hanya boleh 1.
 */

export default function subtract(x, y) {
  return x - y;
}

export const a = 12 + 12;
