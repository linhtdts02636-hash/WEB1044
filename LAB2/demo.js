//bai 1
let numberIn = 3;

function isEven(num) {
  if (num % 2 === 0) {
    console.log("this IS even twin 🌈🌈🌈");
  } else {
    console.log("this is NOT even twin ✌️😭 ");
  }
}

isEven(numberIn);


//bai 2a
// Viết chương trình tính tiền điện theo quy tắc khi biết trước số kWh :
// - 0–50 kWh: 1.800đ/kWh
// - 51–100 kWh: 2.300đ/kWh
// - 100 kWh: 3.000đ/kWh

function calcMoney(input) {
  let rate = 0;
  switch (true) {
    case input <= 50:
      rate = 1800;
      break;
    case input <= 100 && input > 50:
      rate = 2300;
      break;

    case input > 100:
      rate = 3000;
      break;

    default:
      console.log("invalid input!");
      break;
  }
  console.log(input * rate);
}

let gay = 50;
calcMoney(gay);


//bai 2b
// Đồng thời, bạn hãy tính xem một nhà đóng tiền điện là 910.000đ thì nhà đó đang
// dùng bao nhiêu điện?

function calcElectricity(input) {
  let rate = 0;
  switch (true) {
    case input <= 90000:
      rate = 1800;
      break;
    case input > 90000 && input <= 230000:
      rate = 2300;
      break;
    case input > 230000:
      rate = 3000;
      break;
    default:
      console.log("invalid input!");
      break;
  }
  console.log(input / rate);
}

calcElectricity(Math.round(300000));


//bai 3
// intern = 1.0
// staff = 1.5
// senior = 2
// manager = 3
// - Lương cơ bản: 5.000.000đ
// - Ngày công quy định: 24 ngày/tháng
// - Lương = hệ số chức vụ * ngày công * lương cơ bản/ngày công quy định

const rank = Object.freeze({
    INTERN: "intern",
    STAFF: "staff",
    SENIOR: "senior",
    MANAGER: "manager"
})

function calcSalary(dayInput, rankInput){
let rankRate = 0
const baseSalary = 5000000;
const requiredWorkDay = 24;
switch(rankInput){
    case rank.INTERN:
        rankRate = 1
        break
    case rank.STAFF:
        rankRate = 1.5
        break
    case rank.SENIOR:
        rankRate = 2
        break
    case rank.MANAGER:
        rankRate = 3
        break
    default: 
        console.log("invalid input!")
}
console.log(Math.round(rankRate * dayInput * baseSalary/requiredWorkDay))
}

calcSalary(30,rank.INTERN)

