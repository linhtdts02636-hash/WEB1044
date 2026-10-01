let day = document.getElementById("day");
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

console.log(second.textContent);

timer = setInterval(() => {
  let secondNum = second.textContent;
  let minuteNum = minute.textContent;
  let hourNum = hour.textContent;
  let dayNum = day.textContent;
  
  let totalMs = dayNum * 86400 + hourNum * 3600 + minuteNum * 60 + secondNum;
  console.log(totalMs);
  if (totalMs <= 1) {
    clearInterval(timer);
  }
  second.textContent = second.textContent - 1;
  if (second.textContent < 0) {
    second.textContent = 59;
    minute.textContent = minute.textContent - 1;
  }
  if (minute.textContent < 0) {
    minute.textContent = 59;
    hour.textContent = hour.textContent - 1;
  }
  if (hour.textContent < 0) {
    hour.textContent = 23;
    day.textContent = day.textContent - 1;
  }
}, 1000);

//make a countdown
//has day, hour, minute, second
//maybe count each other by seconds?
//second <= 0 then -1 minute
//
