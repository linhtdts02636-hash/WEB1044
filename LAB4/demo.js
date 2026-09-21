//bai 1
// Bạn được cho một mảng shoppingList ban đầu. Hãy thực hiện các yêu cầu sau:
// a) In ra số lượng mặt hàng ban đầu trong danh sách.
// b) Thêm mặt hàng "Sữa" vào cuối danh sách.
// c) Thêm mặt hàng "Bánh mì" vào đầu danh sách.
// d) Xóa mặt hàng cuối cùng ra khỏi danh sách và in tên mặt hàng đó ra
// màn hình.
// e) In ra mặt hàng thứ 2 trong danh sách sau khi đã thay đổi.
// Gợi ý:

let shoppingList = ["67", "eggs", "chickens", "beef"]
console.log("first list "+ shoppingList)

shoppingList.push("milk")
console.log("adding milk "+  shoppingList)

shoppingList.unshift("bread")
console.log("adding bread "+  shoppingList)

console.log("deleting "+ shoppingList.at(-1))
shoppingList.pop(shoppingList.at(-1))

console.log("2nd item "+shoppingList.at(1))

//bai 2
// Cho một mảng các số nguyên numbers.
// Yêu cầu:
// a) Tạo một mảng mới tên là evenNumbers chỉ chứa các số chẵn từ mảng
// numbers gốc.
// b) Tiếp tục sử dụng mảng evenNumbers vừa tạo, tạo ra một mảng mới
// tên là doubledEvenNumbers trong đó mỗi số chẵn được nhân đôi giá trị.

let arr = [2, 3, 5, 9, 3, 65, 57, 67, 68];
console.log(arr)

let evenNumbers = [];
let doubledEvenNumbers = [];

let i = 0;
for (i; i <= arr.length; i++) {
  if (arr[i] % 2 == 0) {
    evenNumbers.push(arr[i]);
  }
}
i = 0;

console.log("evenNumbers " + evenNumbers);

for (i; i < evenNumbers.length; i++) {
  doubledEvenNumbers.push(evenNumbers[i] * 2);
}

console.log("doubledEvenNumbers " + doubledEvenNumbers);
