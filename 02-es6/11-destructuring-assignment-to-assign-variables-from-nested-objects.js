// NOTE : untuk nested object bisa dengan 2 cara sebelumnya juga, new variable atau tidak

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};

// Only change code below this line
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
// Only change code above this line

console.log("TODAY");
console.log(lowToday);
console.log(highToday);

// LATIHAN
const {
  yesterday: { low, high },
  tomorrow: { low: lowTomorrow, high: highTomorrow },
} = LOCAL_FORECAST;
console.log("YESTERDAY");
console.log(low);
console.log(high);
console.log("TOMORROW");
console.log(lowTomorrow);
console.log(highTomorrow);
