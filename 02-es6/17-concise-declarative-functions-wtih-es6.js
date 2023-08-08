// Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  },
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

// LATIHAN, jika di ES5 harus menggunakan colon (:) dan function
const greeting = {
  name: "Rifki",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
greeting.sayHello();
