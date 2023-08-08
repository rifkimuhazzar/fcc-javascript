function convertToInteger(str) {
    return parseInt(str);
}
  
console.log(convertToInteger("56")); // 56
console.log(convertToInteger("56.60")); // 56, selalu mengambil nilai awal/integernya saja
console.log(convertToInteger("56A")); // 56, selalu mengambil nilai awal/integernya saja
console.log(convertToInteger("A56")); // NaN, karena tidak bisa jika ada string di awal