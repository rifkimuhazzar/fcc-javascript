const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender,
  };
  // Only change code above this line
};
console.log(createPerson("Rifki", 22, "Male"));

// CONTOH, jika lebih dari 1 baris dan menggunakan () maka bisa menghilangkan return juga
const sum = (x, y) => ({
  x: x,
  y: y,
});
console.log(12, 12);
