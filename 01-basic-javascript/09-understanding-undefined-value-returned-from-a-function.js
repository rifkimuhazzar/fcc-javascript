// NOTE : jika function tidak ada return maka yg direturn adalah undefined

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum += 5;
  console.log(sum);
}
// Only change code above this line

console.log(addThree());

console.log(addFive());
addFive();
addFive();