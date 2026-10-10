//bai 5
// Vấn đề tự đặt: Quản lý giỏ hàng mua sắm.
// Cho một mảng cart các đối tượng sản phẩm: { name, price, quantity, inStock }.
// Yêu cầu:
// a) Tính tổng tiền của giỏ hàng (price * quantity).
// b) Lọc ra các sản phẩm còn hàng (inStock === true).
// c) Tìm sản phẩm đắt nhất (theo price).
// d) Tạo mảng mới chỉ chứa tên sản phẩm viết hoa.
// e) Sắp xếp giỏ hàng theo giá giảm dần.
//
// --- 1. Phân tích tính hợp lý của vấn đề (trợ giảng) ---
// Đề bài hợp lý: giỏ hàng là bài toán thực tế, kết hợp cả Mảng và Đối tượng,
// đủ các thao tác cơ bản: duyệt, lọc, tìm, map, sắp xếp, tổng hợp.
// Dữ liệu đầu vào rõ ràng (price là số, quantity là số, inStock là boolean),
// nên dễ kiểm tra tính đúng đắn của kết quả.
//
// --- 2. Đánh giá giải pháp ---
// Cách 1 (dùng for loop): đúng đắn nhưng dài dòng, dễ lỗi index (i <= length),
// lặp lại code cho từng yêu cầu -> khó maintain.
// Cách 2 (dùng map/filter/reduce/sort): ngắn gọn, dễ đọc, không mutate mảng gốc,
// hiệu quả O(n) cho các phép lọc/tìm (sort là O(n log n)).
//
// --- 3. Cải thiện ---
// - Dùng filter() thay vì for + push.
// - Dùng reduce() thay vì khai báo biến total rồi cộng dần.
// - Dùng find() thay vì vòng lặp tìm max thủ công.
// - Dùng sort((a, b) => b.price - a.price) thay vì bubble sort.
// - Xử lý edge case: giỏ hàng rỗng -> trả về 0 thay vì NaN.

const cart = [
  { name: "Bánh mì", price: 15000, quantity: 2, inStock: true },
  { name: "Sữa", price: 32000, quantity: 1, inStock: true },
  { name: "Trứng", price: 45000, quantity: 1, inStock: false },
  { name: "Gạo", price: 120000, quantity: 1, inStock: true },
  { name: "Nước mắm", price: 28000, quantity: 3, inStock: true },
  { name: "Đường", price: 22000, quantity: 2, inStock: false },
];


// a) Tính tổng tiền của giỏ hàng (price * quantity).

let total = 0;
let i = 0;
for (i; i < cart.length; i++) {
  total = total + cart[i].price * cart[i].quantity;
}
console.log("total (for loop) " + total);

// b) Lọc ra các sản phẩm còn hàng (inStock === true).

let inStockList = [];
for (i = 0; i < cart.length; i++) {
  if (cart[i].inStock == true) {
    inStockList.push(cart[i]);
  }
}
console.log("inStock (for loop) " + inStockList.length + " san pham");

// c) Tìm sản phẩm đắt nhất (theo price).

let mostExpensive = cart[0];
for (i = 1; i < cart.length; i++) {
  if (cart[i].price > mostExpensive.price) {
    mostExpensive = cart[i];
  }
}
console.log("most expensive (for loop) " + mostExpensive.name);

// --- Cách 2: map / filter / find / reduce / sort (cải tiến) ---

// a) Tính tổng tiền
let totalImproved = cart.reduce((sum, product) => {
  return sum + product.price * product.quantity;
}, 0);
console.log("total (improved) " + totalImproved);

// b) Lọc sản phẩm còn hàng
let inStockImproved = cart.filter((product) => product.inStock === true);
console.log(
  "inStock (improved) " +
    inStockImproved.length +
    " san pham: " +
    inStockImproved.map((product) => product.name)
);

// c) Tìm sản phẩm đắt nhất
let mostExpensiveImproved = cart.reduce((max, product) => {
  return product.price > max.price ? product : max;
}, cart[0]);
console.log("most expensive (improved) " + mostExpensiveImproved.name);


// --- 4. Kết luận của trợ giảng ---
// Giải pháp 2 ưu tiên hơn: đúng đắn, ngắn gọn, không side-effect.
// for loop vẫn ổn để học tư duy duyệt mảng, nhưng trong thực tế
// nên dùng các method bậc cao (map/filter/reduce/sort) cho code dễ đọc và maintain.
// Edge case cần chú ý: cart rỗng thì reduce cần giá trị mặc định 0,
// find/reduce tìm max cần kiểm tra mảng không rỗng trước.


//bai 6
// Prompt đã dùng để sinh dữ liệu fake 100 sinh viên (SV tự chỉnh sửa cho phù hợp):
// "Hãy tạo dữ liệu giả (fake data) gồm 100 sinh viên dưới dạng mảng các đối tượng
// JavaScript. Mỗi sinh viên có các trường: id (SV001 -> SV100), name (tên tiếng
// Việt phổ thông), age (18-24), gender ('Nam'/'Nu'), class ('A'/'B'/'C'),
// score (điểm trung bình 0-10, làm tròn 1 chữ số thập phân).
// Dữ liệu sinh ngẫu nhiên nhưng hợp lý, in ra dạng const students = [ ... ];
// rồi viết code: lọc điểm < 5, tính điểm trung bình lớp, tìm thủ khoa,
// sắp xếp theo điểm giảm dần, đếm số lượng sinh viên each class."
//
// Kết quả nhận được: mảng students 100 phần tử bên dưới + các bài tập xử lý.

const students = [
  { id: "SV001", name: "Huynh Bảo", age: 24, gender: "Nu", class: "C", score: 5.6 },
  { id: "SV002", name: "Nguyen Lan", age: 20, gender: "Nu", class: "C", score: 5.4 },
  { id: "SV003", name: "Tran Quang", age: 23, gender: "Nu", class: "B", score: 5.1 },
  { id: "SV004", name: "Vu Thảo", age: 23, gender: "Nam", class: "B", score: 4.6 },
  { id: "SV005", name: "Huynh Nam", age: 19, gender: "Nu", class: "A", score: 6.8 },
  { id: "SV006", name: "Vu Phúc", age: 23, gender: "Nam", class: "C", score: 6 },
  { id: "SV007", name: "Vo Ngọc", age: 18, gender: "Nam", class: "A", score: 5.6 },
  { id: "SV008", name: "Pham Giang", age: 23, gender: "Nu", class: "C", score: 5.5 },
  { id: "SV009", name: "Le Chi", age: 24, gender: "Nu", class: "A", score: 5.9 },
  { id: "SV010", name: "Nguyen An", age: 19, gender: "Nam", class: "B", score: 6.8 },
  { id: "SV011", name: "Pham Giang", age: 20, gender: "Nam", class: "C", score: 5.8 },
  { id: "SV012", name: "Phan Bảo", age: 23, gender: "Nu", class: "B", score: 3.8 },
  { id: "SV013", name: "Pham Cường", age: 20, gender: "Nu", class: "C", score: 6.4 },
  { id: "SV014", name: "Huynh Đạt", age: 18, gender: "Nam", class: "C", score: 7.1 },
  { id: "SV015", name: "Phan Quang", age: 20, gender: "Nam", class: "B", score: 5.5 },
  { id: "SV016", name: "Vu Bảo", age: 18, gender: "Nam", class: "B", score: 5.8 },
  { id: "SV017", name: "Dang Thảo", age: 22, gender: "Nu", class: "B", score: 5.2 },
  { id: "SV018", name: "Le Chi", age: 20, gender: "Nu", class: "B", score: 5.3 },
  { id: "SV019", name: "Vu Quang", age: 19, gender: "Nam", class: "B", score: 6.4 },
  { id: "SV020", name: "Vu Thảo", age: 19, gender: "Nam", class: "A", score: 4.3 },
  { id: "SV021", name: "Vu Minh", age: 18, gender: "Nam", class: "B", score: 4.3 },
  { id: "SV022", name: "Vo Chi", age: 22, gender: "Nam", class: "C", score: 5.3 },
  { id: "SV023", name: "Hoang Kim", age: 23, gender: "Nu", class: "B", score: 6.6 },
  { id: "SV024", name: "Dang Uyên", age: 18, gender: "Nam", class: "C", score: 7.4 },
  { id: "SV025", name: "Vo Phúc", age: 24, gender: "Nam", class: "B", score: 4.4 },
  { id: "SV026", name: "Phan Giang", age: 23, gender: "Nu", class: "B", score: 5.8 },
  { id: "SV027", name: "Pham Hà", age: 19, gender: "Nam", class: "A", score: 4.5 },
  { id: "SV028", name: "Phan Duy", age: 19, gender: "Nam", class: "A", score: 7.2 },
  { id: "SV029", name: "Pham Kim", age: 20, gender: "Nu", class: "C", score: 4.9 },
  { id: "SV030", name: "Nguyen Bình", age: 20, gender: "Nu", class: "A", score: 6.9 },
  { id: "SV031", name: "Nguyen Ngọc", age: 20, gender: "Nu", class: "A", score: 7.2 },
  { id: "SV032", name: "Vo Duy", age: 22, gender: "Nam", class: "C", score: 6.2 },
  { id: "SV033", name: "Huynh Long", age: 24, gender: "Nam", class: "A", score: 5.1 },
  { id: "SV034", name: "Tran Giang", age: 19, gender: "Nam", class: "B", score: 5 },
  { id: "SV035", name: "Hoang Duy", age: 22, gender: "Nu", class: "C", score: 6.7 },
  { id: "SV036", name: "Vu Hùng", age: 20, gender: "Nam", class: "C", score: 6.9 },
  { id: "SV037", name: "Phan Việt", age: 24, gender: "Nu", class: "B", score: 6.5 },
  { id: "SV038", name: "Nguyen Hà", age: 22, gender: "Nam", class: "C", score: 5.9 },
  { id: "SV039", name: "Phan Cường", age: 19, gender: "Nam", class: "B", score: 7.2 },
  { id: "SV040", name: "Vu Sơn", age: 24, gender: "Nam", class: "C", score: 5.5 },
  { id: "SV041", name: "Vo Uyên", age: 19, gender: "Nam", class: "A", score: 6.8 },
  { id: "SV042", name: "Pham Quân", age: 20, gender: "Nam", class: "A", score: 5.7 },
  { id: "SV043", name: "Vu Sơn", age: 19, gender: "Nam", class: "A", score: 5.4 },
  { id: "SV044", name: "Le Tuấn", age: 19, gender: "Nam", class: "C", score: 6.2 },
  { id: "SV045", name: "Dang Minh", age: 22, gender: "Nam", class: "C", score: 5.8 },
  { id: "SV046", name: "Tran Khánh", age: 23, gender: "Nu", class: "A", score: 7.2 },
  { id: "SV047", name: "Phan Trang", age: 20, gender: "Nam", class: "A", score: 6.7 },
  { id: "SV048", name: "Huynh Quân", age: 19, gender: "Nu", class: "B", score: 8 },
  { id: "SV049", name: "Phan Sơn", age: 24, gender: "Nam", class: "C", score: 3.4 },
  { id: "SV050", name: "Pham Uyên", age: 18, gender: "Nu", class: "B", score: 8.7 },
  { id: "SV051", name: "Vo An", age: 20, gender: "Nu", class: "C", score: 6.4 },
  { id: "SV052", name: "Hoang Việt", age: 18, gender: "Nu", class: "C", score: 6.9 },
  { id: "SV053", name: "Vo Duy", age: 20, gender: "Nu", class: "C", score: 5.5 },
  { id: "SV054", name: "Dang Oanh", age: 22, gender: "Nam", class: "B", score: 7.8 },
  { id: "SV055", name: "Dang Kim", age: 20, gender: "Nam", class: "B", score: 5.8 },
  { id: "SV056", name: "Dang Uyên", age: 18, gender: "Nu", class: "C", score: 7.8 },
  { id: "SV057", name: "Huynh Việt", age: 21, gender: "Nam", class: "A", score: 6.5 },
  { id: "SV058", name: "Le Thảo", age: 24, gender: "Nu", class: "B", score: 6.8 },
  { id: "SV059", name: "Pham Lan", age: 21, gender: "Nam", class: "B", score: 4.1 },
  { id: "SV060", name: "Pham Ngọc", age: 19, gender: "Nam", class: "A", score: 4.9 },
  { id: "SV061", name: "Dang Việt", age: 23, gender: "Nam", class: "C", score: 7.1 },
  { id: "SV062", name: "Vo Mai", age: 21, gender: "Nu", class: "B", score: 8.6 },
  { id: "SV063", name: "Vo Ngọc", age: 19, gender: "Nam", class: "A", score: 7.4 },
  { id: "SV064", name: "Huynh An", age: 21, gender: "Nam", class: "C", score: 8.2 },
  { id: "SV065", name: "Nguyen Khánh", age: 18, gender: "Nu", class: "C", score: 7.8 },
  { id: "SV066", name: "Huynh Trang", age: 24, gender: "Nam", class: "C", score: 8.3 },
  { id: "SV067", name: "Huynh Yên", age: 22, gender: "Nu", class: "B", score: 8.6 },
  { id: "SV068", name: "Vu Sơn", age: 23, gender: "Nam", class: "B", score: 7 },
  { id: "SV069", name: "Dang Chi", age: 20, gender: "Nu", class: "A", score: 4.3 },
  { id: "SV070", name: "Vo Việt", age: 24, gender: "Nu", class: "A", score: 5.2 },
  { id: "SV071", name: "Vu Hà", age: 21, gender: "Nam", class: "A", score: 7.5 },
  { id: "SV072", name: "Vo Cường", age: 24, gender: "Nam", class: "A", score: 7.8 },
  { id: "SV073", name: "Huynh Bảo", age: 22, gender: "Nu", class: "C", score: 6.5 },
  { id: "SV074", name: "Hoang Uyên", age: 20, gender: "Nu", class: "B", score: 4.5 },
  { id: "SV075", name: "Nguyen Xuân", age: 18, gender: "Nam", class: "C", score: 8.2 },
  { id: "SV076", name: "Nguyen Nam", age: 21, gender: "Nam", class: "B", score: 6.3 },
  { id: "SV077", name: "Dang Việt", age: 21, gender: "Nu", class: "B", score: 5.9 },
  { id: "SV078", name: "Tran Tuấn", age: 18, gender: "Nu", class: "B", score: 6.1 },
  { id: "SV079", name: "Pham Duy", age: 21, gender: "Nu", class: "C", score: 5.3 },
  { id: "SV080", name: "Nguyen Hùng", age: 23, gender: "Nam", class: "C", score: 7.2 },
  { id: "SV081", name: "Le Minh", age: 22, gender: "Nu", class: "A", score: 4 },
  { id: "SV082", name: "Nguyen Hùng", age: 18, gender: "Nam", class: "B", score: 4.4 },
  { id: "SV083", name: "Dang Mai", age: 21, gender: "Nu", class: "C", score: 5.9 },
  { id: "SV084", name: "Hoang Duy", age: 24, gender: "Nam", class: "A", score: 5 },
  { id: "SV085", name: "Le Phúc", age: 20, gender: "Nu", class: "C", score: 7.4 },
  { id: "SV086", name: "Vu Ngọc", age: 21, gender: "Nam", class: "C", score: 7.7 },
  { id: "SV087", name: "Le Đạt", age: 21, gender: "Nu", class: "B", score: 3.9 },
  { id: "SV088", name: "Dang Tuấn", age: 20, gender: "Nu", class: "B", score: 5.7 },
  { id: "SV089", name: "Dang Khánh", age: 20, gender: "Nam", class: "C", score: 6.9 },
  { id: "SV090", name: "Tran Mai", age: 24, gender: "Nam", class: "A", score: 4.8 },
  { id: "SV091", name: "Huynh Nam", age: 20, gender: "Nu", class: "A", score: 4.1 },
  { id: "SV092", name: "Pham Giang", age: 18, gender: "Nam", class: "A", score: 5.9 },
  { id: "SV093", name: "Pham Quang", age: 21, gender: "Nu", class: "A", score: 5 },
  { id: "SV094", name: "Hoang Trang", age: 18, gender: "Nam", class: "B", score: 5.1 },
  { id: "SV095", name: "Nguyen Quang", age: 23, gender: "Nu", class: "B", score: 6.4 },
  { id: "SV096", name: "Vu Oanh", age: 19, gender: "Nu", class: "A", score: 8.4 },
  { id: "SV097", name: "Le Nam", age: 23, gender: "Nam", class: "C", score: 7.5 },
  { id: "SV098", name: "Huynh Việt", age: 22, gender: "Nu", class: "C", score: 5.3 },
  { id: "SV099", name: "Le Khánh", age: 19, gender: "Nu", class: "C", score: 5.7 },
  { id: "SV100", name: "Nguyen Việt", age: 23, gender: "Nam", class: "C", score: 4.6 }
];
console.log("so luong sinh vien " + students.length);
console.log("sample " + JSON.stringify(students[0]));
console.log("sample " + JSON.stringify(students[99]));

// a) Loc cac sinh vien diem < 5 (rot mon)
let failed = students.filter((student) => student.score < 5);
console.log("so sinh vien rot " + failed.length);
console.log(
  "danh sach rot " + failed.map((student) => student.id + ":" + student.score)
);

// b) Tinh diem trung binh ca lop
let totalScore = students.reduce((sum, student) => sum + student.score, 0);
let average = Math.round((totalScore / students.length) * 100) / 100;
console.log("diem trung binh lop " + average);

// c) Tim sinh vien diem cao nhat (thu khoa)
let best = students.reduce((max, student) => {
  return student.score > max.score ? student : max;
}, students[0]);
console.log("thu khoa " + best.id + " " + best.name + " " + best.score);

// d) Sap xep danh sach sinh vien theo diem giam dan
let sortedStudents = [...students].sort((a, b) => b.score - a.score);
console.log(
  "top 5 " +
    sortedStudents
      .slice(0, 5)
      .map((student) => student.id + ":" + student.score)
      .join(" | ")
);

// e) Dem so sinh vien moi lop bang for loop
let countByClass = {};
for (let i = 0; i < sortedStudents.length; i++) {
  let key = sortedStudents[i].class;
  if (countByClass[key]) {
    countByClass[key] = countByClass[key] + 1;
  } else {
    countByClass[key] = 1;
  }
}
console.log("so sinh vien moi lop " + JSON.stringify(countByClass));

// f) Dem so sinh vien moi lop bang reduce (cach cai tien)
let countByClassImproved = students.reduce((group, student) => {
  group[student.class] = (group[student.class] || 0) + 1;
  return group;
}, {});
console.log(
  "so sinh vien moi lop (improved) " + JSON.stringify(countByClassImproved)
);

// g) Loc sinh vien nu diem >= 8 (ket hop filter tren object long nhau)
let goodGirls = students.filter(
  (student) => student.gender === "Nu" && student.score >= 8
);
console.log(
  "nu gioi " + goodGirls.map((student) => student.id + ":" + student.score)
);
