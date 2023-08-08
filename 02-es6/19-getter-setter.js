/* NOTE : - jika menggunakan get dan set nama functionnya bisa sama dan disarankan sama.
          - saat memanggil get tidak perlu (), contoh thermos.temperature.
          - begitu juga dengan set untuk mengubahnya, contoh thermos.temperature = 30.
*/

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this._celsius = (5 / 9) * (fahrenheit - 32);
  }

  set temperature(changeScale) {
    this._celsius = changeScale;
  }

  get temperature() {
    return this._celsius;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
