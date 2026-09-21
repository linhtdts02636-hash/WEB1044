//bai 3
// a. Lọc học sinh điểm > 8.
// b. Tìm học sinh có điểm cao nhất.
// c. Tính điểm trung bình cả lớp.
// d. Tạo mảng mới chỉ chứa tên học sinh.

const students = [
  { name: "An", score: 8.2 },
  { name: "Bình", score: 7.5 },
  { name: "Chi", score: 9.1 },
  { name: "Duy", score: 6.8 },
  { name: "Hà", score: 8.7 },
  { name: "Khánh", score: 5.9 },
  { name: "Lan", score: 7.8 },
  { name: "Minh", score: 9.4 },
  { name: "Ngọc", score: 6.5 },
  { name: "Quân", score: 8.0 },
];

let above = [];

students.forEach((student) => {
  filterScore(student.score, 8);
});
console.log(above);

console.log(above[0]);

function filterScore(input, scoreFilter) {
  if (input > scoreFilter) {
    above.push(input);
  }
  return above;
}



// e. Sắp xếp danh sách học sinh theo điểm giảm dần.
function sortDesc(inputArr) {
  let i = 0;
  let j = i+1;
  let temp ;
  for (i; i < inputArr.length; i++) {
    for (j = i+1; j < inputArr.length; j++) {
      if (inputArr[j].score > inputArr[i].score) {
        temp = inputArr[j];
        inputArr[j] = inputArr[i];
        inputArr[i] = temp;
      }
    }
  }
  console.log(inputArr)
}

sortDesc(students);

// b. Tìm học sinh có điểm cao nhất.
function sortHighest(inputArr) {
  let i = 0;
  let j = i+1;
  let temp ;
  for (i; i < inputArr.length; i++) {
    for (j = i+1; j < inputArr.length; j++) {
      if (inputArr[j].score > inputArr[i].score) {
        temp = inputArr[j];
        inputArr[j] = inputArr[i];
        inputArr[i] = temp;
      }
    }
  }
  console.log(inputArr[0])
}

sortHighest(students)

// c. Tính điểm trung bình cả lớp.

function calcAverage(inputArr){
  let average = 0
  let total = 0
  let i = 0
  for(i; i<inputArr.length;i++){
    total = total + inputArr[i].score
  }
  console.log("total is " + total)
  average = Math.round(total/inputArr.length)
  console.log("average is " + average)
  
}
calcAverage(students)

// d. Tạo mảng mới chỉ chứa tên học sinh.
function onlyName(inputArr){
  newArr = []
  inputArr.forEach((input) => {
    newArr.push(input.name)
  })
  console.log(newArr)
}

onlyName(students)