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
