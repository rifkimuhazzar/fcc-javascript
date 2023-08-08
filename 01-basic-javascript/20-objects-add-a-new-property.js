// NOTE : 2 cara menambah properti baru dengan . dan []

const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof";
myDog["bark2"] = "woof2";

console.log(myDog.bark);
console.log(myDog["bark2"]);
