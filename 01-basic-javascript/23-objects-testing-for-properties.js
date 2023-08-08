function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else if (!obj.hasOwnProperty(checkProp)){
      return "Not Found";
    }
    return "Change Me!";
    // Only change code above this line
  }
  
  let myObject = {
    first: "Hello",
    second: "World"
  }
  console.info(checkObj(myObject, "second"));
  console.info(checkObj(myObject, "second2"));