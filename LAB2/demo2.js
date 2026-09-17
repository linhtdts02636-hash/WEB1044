//bai 4
// Dùng vòng lặp tương ứng để in ra bảng cửu chương từ 2 đến 9

function multiplicationTabl() {
  let result = 0;
  let i = 0;
  let j = 2;
  while (j >= 2 && j <= 9) {
    for (i; i <= 10; i++) {
      result = j * i;
      console.log(result);
    }
    console.log("multiplication table" + j);
    i = 0;
    j = j + 1;
  }
}

multiplicationTabl(2);

// Cho 1 số n, kiểm tra số đó có phải số nguyên tố không? (số nguyên tố là số chỉ chia
// được cho 1 và chính nó)
// Find the square root of your number.Round that square root down to the nearest whole number.
// This is your finish line.Divide your number by 2, 3, 4, 5, and so on,
// counting up by 1 each time.Stop as soon as you hit your finish line number

function isPrime(input) {
  result = false;
  switch (true) {
    case input === 1:
      result = true;
      console.log(result);
      break;
    case input === 2:
      result = true;
      console.log(result);
      break;
    case input >=3:
        calcPrime(input)
        break
  }

  function calcPrime(input) {
    input = Math.round(Math.sqrt(input))
    let i = 0
    for(i;i<=input;i++){
        if(input % i === 0){
            result = false;
            break;
        } else {
            result = true;
            break;
        }
    }
    console.log(result)
  }
}
