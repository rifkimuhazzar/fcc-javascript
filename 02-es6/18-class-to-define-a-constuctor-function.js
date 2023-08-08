// Only change code below this line
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
// Only change code above this line

const carrot = new Vegetable("carrot");
console.log(carrot.name); // Should display 'carrot'

// LATIHAN, yang di atas adalah explicit berikut contoh yang implicit.
class SayHello {
  name = "Hello 1";

  sayHello() {
    return "Hello 2";
  }
}
const greet = new SayHello();
console.log(greet.name);
console.log(greet.sayHello());
