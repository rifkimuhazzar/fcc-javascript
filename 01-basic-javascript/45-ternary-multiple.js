// NOTE : bi

function checkSign(num) {
    return (num > 0) ? "positive"
          : (num === 0) ? "zero"
          : "negative";
  }
  
  console.log(checkSign(10));
  console.log(checkSign(0));
  console.log(checkSign(-1));