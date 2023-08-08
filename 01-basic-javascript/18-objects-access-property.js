// NOTE : 2 cara mengakses properti dengan . dan []

// Setup
const testObj = {
    "hat": "ballcap",
    shirt: "jersey",
    "shoes 1": "cleats"
  };
  
  // Only change code below this line
  let a = "shoes 1";
  let b = "shoes 1";
  
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj["shirt"];    // Change this line
  const shirtValue2 = testObj.shirt;    
  const shoesValue = testObj[a];
  
  console.log(hatValue);
  console.log(shirtValue);
  console.log(shirtValue2);
  console.log(shoesValue);