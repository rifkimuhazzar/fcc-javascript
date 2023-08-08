const date = function () {
  return new Date();
};
console.log(date());

const magic = () => new Date();
console.log(magic());

const magic2 = () => {
  console.log(new Date());
};
magic2();
