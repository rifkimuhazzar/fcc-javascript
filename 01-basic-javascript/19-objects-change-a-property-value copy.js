// NOTE : 2 cara mengubah properti dengan . dan []

// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
myDog["friends"] = "Happy Campers";

console.log(myDog.name);
console.log(myDog.friends);