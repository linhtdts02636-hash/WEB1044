//bai 2M
const day = Object.freeze({
  weekday: "weekday",
  weekend: "weekend",
});

function calcTicket(age, DOTW) {
  const price = 100000;
  let result = price;
  if (age < 12) {
    result = price * 0.5;
  } else if (age <= 22) { 
    result = price * 0.8;
  } else if (age >= 60) {
    result = price * 0.6;
  }
  if (DOTW === day.weekend) {
    result = result + 20000;
  }
  return result;
}

console.log(calcTicket(80, day.weekday));
