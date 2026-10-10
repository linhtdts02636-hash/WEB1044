//bai products
// Cho mảng products gồm 100 sản phẩm. Mỗi sản phẩm là một Object gồm 4 thuộc tính:
// name; price; category; quantity.
// Câu 1. Hiển thị danh sách sản phẩm
// Câu 2. Hiển thị tên sản phẩm
// Câu 3. Hiển thị sản phẩm có giá trên 500.000
// Câu 4. Hiển thị sản phẩm thuộc danh mục "Thời trang"
// Câu 5. Hiển thị sản phẩm có số lượng dưới 5
// Câu 6. Tìm một sản phẩm theo tên
// Câu 7. Thêm sản phẩm mới
// Câu 8. Cập nhật giá sản phẩm
// Câu 9. Xóa sản phẩm cuối cùng
// Câu 10. Hiển thị danh sách sản phẩm sau khi xử lý

let products = [
  { name: "Áo thun 1", price: 150000, category: "Thời trang", quantity: 3 },
  { name: "Quần jean 2", price: 650000, category: "Điện tử", quantity: 7 },
  { name: "Giày sneaker 3", price: 320000, category: "Gia dụng", quantity: 12 },
  { name: "Đồng hồ 4", price: 890000, category: "Sách", quantity: 4 },
  { name: "Túi xách 5", price: 480000, category: "Thực phẩm", quantity: 20 },
  { name: "Mũ lưỡi trai 6", price: 1200000, category: "Thời trang", quantity: 2 },
  { name: "Tai nghe 7", price: 99000, category: "Điện tử", quantity: 9 },
  { name: "Điện thoại 8", price: 750000, category: "Gia dụng", quantity: 1 },
  { name: "Laptop 9", price: 430000, category: "Sách", quantity: 15 },
  { name: "Nồi cơm 10", price: 560000, category: "Thực phẩm", quantity: 6 },
  { name: "Áo khoác 11", price: 275000, category: "Thời trang", quantity: 8 },
  { name: "Váy liền 12", price: 690000, category: "Điện tử", quantity: 25 },
  { name: "Balo 13", price: 350000, category: "Gia dụng", quantity: 5 },
  { name: "Kính mát 14", price: 980000, category: "Sách", quantity: 11 },
  { name: "Loa bluetooth 15", price: 510000, category: "Thực phẩm", quantity: 3 },
  { name: "Áo thun 16", price: 1450000, category: "Thời trang", quantity: 18 },
  { name: "Quần jean 17", price: 120000, category: "Điện tử", quantity: 7 },
  { name: "Giày sneaker 18", price: 830000, category: "Gia dụng", quantity: 2 },
  { name: "Đồng hồ 19", price: 460000, category: "Sách", quantity: 14 },
  { name: "Túi xách 20", price: 700000, category: "Thực phẩm", quantity: 4 },
  { name: "Mũ lưỡi trai 21", price: 190000, category: "Thời trang", quantity: 9 },
  { name: "Tai nghe 22", price: 640000, category: "Điện tử", quantity: 6 },
  { name: "Điện thoại 23", price: 380000, category: "Gia dụng", quantity: 22 },
  { name: "Laptop 24", price: 920000, category: "Sách", quantity: 1 },
  { name: "Nồi cơm 25", price: 500000, category: "Thực phẩm", quantity: 13 },
  { name: "Áo khoác 26", price: 1100000, category: "Thời trang", quantity: 5 },
  { name: "Váy liền 27", price: 85000, category: "Điện tử", quantity: 17 },
  { name: "Balo 28", price: 760000, category: "Gia dụng", quantity: 3 },
  { name: "Kính mát 29", price: 415000, category: "Sách", quantity: 10 },
  { name: "Loa bluetooth 30", price: 575000, category: "Thực phẩm", quantity: 8 },
  { name: "Áo thun 31", price: 230000, category: "Thời trang", quantity: 2 },
  { name: "Quần jean 32", price: 670000, category: "Điện tử", quantity: 30 },
  { name: "Giày sneaker 33", price: 340000, category: "Gia dụng", quantity: 6 },
  { name: "Đồng hồ 34", price: 860000, category: "Sách", quantity: 4 },
  { name: "Túi xách 35", price: 525000, category: "Thực phẩm", quantity: 16 },
  { name: "Mũ lưỡi trai 36", price: 1350000, category: "Thời trang", quantity: 7 },
  { name: "Tai nghe 37", price: 110000, category: "Điện tử", quantity: 12 },
  { name: "Điện thoại 38", price: 780000, category: "Gia dụng", quantity: 1 },
  { name: "Laptop 39", price: 445000, category: "Sách", quantity: 19 },
  { name: "Nồi cơm 40", price: 610000, category: "Thực phẩm", quantity: 5 },
  { name: "Áo khoác 41", price: 175000, category: "Thời trang", quantity: 11 },
  { name: "Váy liền 42", price: 720000, category: "Điện tử", quantity: 3 },
  { name: "Balo 43", price: 365000, category: "Gia dụng", quantity: 21 },
  { name: "Kính mát 44", price: 940000, category: "Sách", quantity: 8 },
  { name: "Loa bluetooth 45", price: 495000, category: "Thực phẩm", quantity: 2 },
  { name: "Áo thun 46", price: 1250000, category: "Thời trang", quantity: 14 },
  { name: "Quần jean 47", price: 95000, category: "Điện tử", quantity: 4 },
  { name: "Giày sneaker 48", price: 735000, category: "Gia dụng", quantity: 10 },
  { name: "Đồng hồ 49", price: 470000, category: "Sách", quantity: 6 },
  { name: "Túi xách 50", price: 590000, category: "Thực phẩm", quantity: 27 },
  { name: "Mũ lưỡi trai 51", price: 210000, category: "Thời trang", quantity: 5 },
  { name: "Tai nghe 52", price: 660000, category: "Điện tử", quantity: 9 },
  { name: "Điện thoại 53", price: 310000, category: "Gia dụng", quantity: 1 },
  { name: "Laptop 54", price: 900000, category: "Sách", quantity: 15 },
  { name: "Nồi cơm 55", price: 535000, category: "Thực phẩm", quantity: 7 },
  { name: "Áo khoác 56", price: 1500000, category: "Thời trang", quantity: 3 },
  { name: "Váy liền 57", price: 105000, category: "Điện tử", quantity: 24 },
  { name: "Balo 58", price: 810000, category: "Gia dụng", quantity: 12 },
  { name: "Kính mát 59", price: 455000, category: "Sách", quantity: 4 },
  { name: "Loa bluetooth 60", price: 585000, category: "Thực phẩm", quantity: 8 },
  { name: "Áo thun 61", price: 260000, category: "Thời trang", quantity: 18 },
  { name: "Quần jean 62", price: 705000, category: "Điện tử", quantity: 2 },
  { name: "Giày sneaker 63", price: 335000, category: "Gia dụng", quantity: 13 },
  { name: "Đồng hồ 64", price: 965000, category: "Sách", quantity: 6 },
  { name: "Túi xách 65", price: 505000, category: "Thực phẩm", quantity: 10 },
  { name: "Mũ lưỡi trai 66", price: 1180000, category: "Thời trang", quantity: 5 },
  { name: "Tai nghe 67", price: 92000, category: "Điện tử", quantity: 3 },
  { name: "Điện thoại 68", price: 770000, category: "Gia dụng", quantity: 20 },
  { name: "Laptop 69", price: 425000, category: "Sách", quantity: 7 },
  { name: "Nồi cơm 70", price: 620000, category: "Thực phẩm", quantity: 11 },
  { name: "Áo khoác 71", price: 195000, category: "Thời trang", quantity: 4 },
  { name: "Váy liền 72", price: 680000, category: "Điện tử", quantity: 16 },
  { name: "Balo 73", price: 375000, category: "Gia dụng", quantity: 9 },
  { name: "Kính mát 74", price: 875000, category: "Sách", quantity: 2 },
  { name: "Loa bluetooth 75", price: 545000, category: "Thực phẩm", quantity: 12 },
  { name: "Áo thun 76", price: 1400000, category: "Thời trang", quantity: 1 },
  { name: "Quần jean 77", price: 130000, category: "Điện tử", quantity: 8 },
  { name: "Giày sneaker 78", price: 745000, category: "Gia dụng", quantity: 5 },
  { name: "Đồng hồ 79", price: 440000, category: "Sách", quantity: 23 },
  { name: "Túi xách 80", price: 605000, category: "Thực phẩm", quantity: 6 },
  { name: "Mũ lưỡi trai 81", price: 245000, category: "Thời trang", quantity: 7 },
  { name: "Tai nghe 82", price: 635000, category: "Điện tử", quantity: 4 },
  { name: "Điện thoại 83", price: 325000, category: "Gia dụng", quantity: 17 },
  { name: "Laptop 84", price: 915000, category: "Sách", quantity: 10 },
  { name: "Nồi cơm 85", price: 515000, category: "Thực phẩm", quantity: 3 },
  { name: "Áo khoác 86", price: 1300000, category: "Thời trang", quantity: 15 },
  { name: "Váy liền 87", price: 115000, category: "Điện tử", quantity: 2 },
  { name: "Balo 88", price: 795000, category: "Gia dụng", quantity: 11 },
  { name: "Kính mát 89", price: 475000, category: "Sách", quantity: 9 },
  { name: "Loa bluetooth 90", price: 570000, category: "Thực phẩm", quantity: 5 },
  { name: "Áo thun 91", price: 205000, category: "Thời trang", quantity: 13 },
  { name: "Quần jean 92", price: 715000, category: "Điện tử", quantity: 6 },
  { name: "Giày sneaker 93", price: 355000, category: "Gia dụng", quantity: 8 },
  { name: "Đồng hồ 94", price: 955000, category: "Sách", quantity: 25 },
  { name: "Túi xách 95", price: 490000, category: "Thực phẩm", quantity: 1 },
  { name: "Mũ lưỡi trai 96", price: 1220000, category: "Thời trang", quantity: 4 },
  { name: "Tai nghe 97", price: 88000, category: "Điện tử", quantity: 19 },
  { name: "Điện thoại 98", price: 755000, category: "Gia dụng", quantity: 7 },
  { name: "Laptop 99", price: 435000, category: "Sách", quantity: 3 },
  { name: "Nồi cơm 100", price: 640000, category: "Thực phẩm", quantity: 14 },
];
console.log("so luong san pham: " + products.length);

// Cau 1. Hien thi danh sach san pham
function showProducts(inputArr) {
  let i = 0;
  for (i; i < inputArr.length; i++) {
    console.log(
      inputArr[i].name +
        " | gia: " +
        inputArr[i].price +
        " | danh muc: " +
        inputArr[i].category +
        " | so luong: " +
        inputArr[i].quantity
    );
  }
  return inputArr;
}
console.log("Cau 1. Danh sach san pham:");
showProducts(products);

// Cau 2. Hien thi ten san pham
function showNames(inputArr) {
  let nameArr = [];
  inputArr.forEach((product) => {
    nameArr.push(product.name);
  });
  console.log(nameArr);
  return nameArr;
}
console.log("Cau 2. Ten san pham:");
showNames(products);

// Cau 3. Hien thi san pham co gia tren 500.000
function filterPrice(inputArr, priceFilter) {
  let result = [];
  inputArr.forEach((product) => {
    if (product.price > priceFilter) {
      result.push(product);
    }
  });
  console.log(result);
  return result;
}
console.log("Cau 3. San pham co gia tren 500.000:");
filterPrice(products, 500000);

// Cau 4. Hien thi san pham thuoc danh muc "Thoi trang"
function filterCategory(inputArr, categoryFilter) {
  let result = [];
  inputArr.forEach((product) => {
    if (product.category === categoryFilter) {
      result.push(product);
    }
  });
  console.log(result);
  return result;
}
console.log("Cau 4. San pham thuoc danh muc Thoi trang:");
filterCategory(products, "Thời trang");

// Cau 5. Hien thi san pham co so luong duoi 5
function filterQuantity(inputArr, quantityFilter) {
  let result = [];
  inputArr.forEach((product) => {
    if (product.quantity < quantityFilter) {
      result.push(product);
    }
  });
  console.log(result);
  return result;
}
console.log("Cau 5. San pham co so luong duoi 5:");
filterQuantity(products, 5);

// Cau 6. Tim mot san pham theo ten
function findProduct(name) {
  let found = null;
  let i = 0;
  for (i; i < products.length; i++) {
    if (products[i].name === name) {
      found = products[i];
      break;
    }
  }
  if (found === null) {
    console.log("khong tim thay san pham!");
  }
  return found;
}
console.log("Cau 6. Tim mot san pham theo ten:");
console.log(findProduct("Đồng hồ 4"));

// Cau 7. Them san pham moi
function addProduct(name, price, category, quantity) {
  let newProduct = { name, price, category, quantity };
  products.push(newProduct);
  return newProduct;
}
console.log("Cau 7. Them san pham moi:");
console.log(addProduct("Áo len", 750000, "Thời trang", 8));
console.log("so luong san pham sau khi them: " + products.length);

// Cau 8. Cap nhat gia san pham
function updatePrice(name, newPrice) {
  let product = findProduct(name);
  if (product !== null) {
    product.price = newPrice;
    console.log("da cap nhat gia thanh cong!");
  } else {
    console.log("khong tim thay san pham!");
  }
  return product;
}
console.log("Cau 8. Cap nhat gia san pham:");
console.log(updatePrice("Áo len", 800000));

// Cau 9. Xoa san pham cuoi cung
function deleteLast() {
  let deleted = products.pop();
  return deleted;
}
console.log("Cau 9. Xoa san pham cuoi cung:");
console.log(deleteLast());
console.log("so luong san pham sau khi xoa: " + products.length);

// Cau 10. Hien thi danh sach san pham sau khi xu ly
console.log("Cau 10. Danh sach san pham sau khi xu ly:");
showProducts(products);
