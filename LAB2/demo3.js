// Cho 1 số n, kiểm tra số đó có phải số nguyên tố không? (số nguyên tố là số chỉ chia
// được cho 1 và chính nó)

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
    console.log(input)
    let i = 2
    for(i;i<input;i++){
        if(input % i === 0){
            result = false;
            break;
        } else {
            result = true;
        }
    }
  }
    console.log(result)

}

isPrime(34)