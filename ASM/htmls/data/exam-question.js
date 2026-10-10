const examQuestions = {
  // id: 1 -> Sinh học (15 questions)
  1: [
    { id: 1, text: "Đơn vị cơ bản cấu tạo nên mọi cơ thể sinh vật là gì?", options: ["Tế bào", "Mô", "Cơ quan", "Hệ cơ quan"], correct: 0 },
    { id: 2, text: "Thành phần nào điều khiển mọi hoạt động sống của tế bào?", options: ["Màng sinh chất", "Tế bào chất", "Nhân tế bào", "Không bào"], correct: 2 },
    { id: 3, text: "Quá trình quang hợp của cây xanh diễn ra chủ yếu ở bào quan nào?", options: ["Ty thể", "Lục lạp", "Ribosome", "Bộ máy Golgi"], correct: 1 },
    { id: 4, text: "Cây xanh hấp thụ khí nào trong quá trình quang hợp?", options: ["Oxy", "Nitơ", "Carbon dioxide (CO2)", "Hydro"], correct: 2 },
    { id: 5, text: "Sản phẩm chính của quá trình quang hợp giải phóng ra môi trường là gì?", options: ["Khí Oxy", "Khí CO2", "Nước", "Muối khoáng"], correct: 0 },
    { id: 6, text: "Axit nucleic mang thông tin di truyền của cơ thể sinh vật là?", options: ["Protein", "Lipid", "ADN", "Glucose"], correct: 2 },
    { id: 7, text: "Bào quan nào được ví như 'nhà máy năng lượng' của tế bào?", options: ["Lục lạp", "Ty thể", "Nhân", "Lưới nội chất"], correct: 1 },
    { id: 8, text: "Ở người, cơ quan nào có nhiệm vụ lọc máu và hình thành nước tiểu?", options: ["Gan", "Tim", "Phổi", "Thận"], correct: 3 },
    { id: 9, text: "Nhóm máu nào được gọi là nhóm máu chuyên cho?", options: ["Nhóm máu A", "Nhóm máu B", "Nhóm máu O", "Nhóm máu AB"], correct: 2 },
    { id: 10, text: "Nhóm máu nào được gọi là nhóm máu chuyên nhận?", options: ["Nhóm máu A", "Nhóm máu B", "Nhóm máu O", "Nhóm máu AB"], correct: 3 },
    { id: 11, text: "Người được mệnh danh là 'Cha đẻ của ngành Di truyền học' là ai?", options: ["Darwin", "Mendel", "Pasteur", "Lamark"], correct: 1 },
    { id: 12, text: "Bộ nhiễm sắc thể lưỡng bội (2n) ở người bình thường là bao nhiêu?", options: ["44", "46", "48", "23"], correct: 1 },
    { id: 13, text: "Hiện tượng cây xanh hướng về phía có ánh sáng gọi là gì?", options: ["Hướng sáng", "Hướng nước", "Hướng đất", "Hướng hóa"], correct: 0 },
    { id: 14, text: "Hệ cơ quan nào thực hiện chức năng vận chuyển chất dinh dưỡng và oxy đến tế bào?", options: ["Hệ hô hấp", "Hệ tuần hoàn", "Hệ tiêu hóa", "Hệ bài tiết"], correct: 1 },
    { id: 15, text: "Vitamin nào hỗ trợ tốt nhất cho thị lực và giúp ngăn ngừa bệnh quáng gà?", options: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin A"], correct: 3 }
  ],

  // id: 2 -> Sử học (15 questions)
  2: [
    { id: 1, text: "Trận Điện Biên Phủ diễn ra năm nào?", options: ["1955", "1956", "1954", "1953"], correct: 2 },
    { id: 2, text: "Trận Điện Biên Phủ bắt đầu vào ngày nào?", options: ["13/3/1954", "7/5/1954", "1/5/1954", "20/3/1954"], correct: 0 },
    { id: 3, text: "Trận Điện Biên Phủ kết thúc vào ngày nào?", options: ["5/5/1954", "7/5/1954", "10/5/1954", "6/5/1954"], correct: 1 },
    { id: 4, text: "Trận Điện Biên Phủ diễn ra tại tỉnh nào hiện nay?", options: ["Sơn La", "Điện Biên", "Lai Châu", "Lào Cai"], correct: 1 },
    { id: 5, text: "Ai là Tổng chỉ huy quân đội Việt Nam tại Điện Biên Phủ?", options: ["Võ Nguyên Giáp", "Trần Phú", "Phạm Văn Đồng", "Lê Duẩn"], correct: 0 },
    { id: 6, text: "Quân đội nào bị đánh bại trong trận Điện Biên Phủ?", options: ["Pháp", "Nhật", "Mỹ", "Anh"], correct: 0 },
    { id: 7, text: "Tướng Pháp chỉ huy tập đoàn cứ điểm Điện Biên Phủ là ai?", options: ["Navarre", "De Gaulle", "Henri Navarre", "Christian de Castries"], correct: 3 },
    { id: 8, text: "Trận Điện Biên Phủ kéo dài bao nhiêu ngày?", options: ["55 ngày", "56 ngày", "57 ngày", "58 ngày"], correct: 1 },
    { id: 9, text: "Chiến thắng Điện Biên Phủ dẫn đến hiệp định nào được ký?", options: ["Hiệp định Paris", "Hiệp định Genève", "Hiệp định Versailles", "Hiệp định Potsdam"], correct: 1 },
    { id: 10, text: "Chiến thuật chính được quân đội Việt Nam sử dụng tại Điện Biên Phủ là gì?", options: ["Đánh nhanh thắng nhanh", "Vây lấn", "Đánh du kích", "Đổ bộ đường không"], correct: 1 },
    { id: 11, text: "Điện Biên Phủ được Pháp xây dựng thành loại căn cứ gì?", options: ["Tập đoàn cứ điểm", "Thành phố quân sự", "Căn cứ hải quân", "Pháo đài ven biển"], correct: 0 },
    { id: 12, text: "Quân đội Việt Nam đã vận chuyển pháo lên Điện Biên Phủ bằng cách nào?", options: ["Xe tải", "Máy bay", "Kéo tay qua núi rừng", "Tàu hỏa"], correct: 2 },
    { id: 13, text: "Trận đánh mở màn chiến dịch Điện Biên Phủ là cứ điểm nào?", options: ["Him Lam", "A1", "C1", "Hồng Cúm"], correct: 0 },
    { id: 14, text: "Cứ điểm quan trọng nhất trong trận Điện Biên Phủ là gì?", options: ["A1", "Him Lam", "C1", "D1"], correct: 0 },
    { id: 15, text: "Chiến thắng Điện Biên Phủ có ý nghĩa gì?", options: ["Kết thúc chiến tranh thế giới thứ hai", "Chấm dứt chiến tranh Đông Dương lần thứ nhất", "Bắt đầu chiến tranh Việt Nam", "Thống nhất đất nước"], correct: 1 }
  ],

  // id: 3 -> Toán học (19 questions)
  3: [
    { id: 1, text: "Số nguyên tố nhỏ nhất là số nào?", options: ["0", "1", "2", "3"], correct: 2 },
    { id: 2, text: "Giá trị của biểu thức 5 + 5 × 5 - 5 bằng bao nhiêu?", options: ["45", "25", "20", "50"], correct: 1 },
    { id: 3, text: "Tổng số đo ba góc trong một tam giác bằng bao nhiêu độ?", options: ["90°", "180°", "360°", "60°"], correct: 1 },
    { id: 4, text: "Phân số 3/4 được viết dưới dạng số thập phân là gì?", options: ["0.34", "0.75", "3.4", "0.5"], correct: 1 },
    { id: 5, text: "Công thức tính diện tích hình tròn bán kính r là gì?", options: ["π × r × 2", "π × r²", "2 × π × r", "π² × r"], correct: 1 },
    { id: 6, text: "Phương trình x - 12 = 25 có nghiệm x bằng bao nhiêu?", options: ["13", "37", "35", "-13"], correct: 1 },
    { id: 7, text: "Căn bậc hai số học của 81 là bao nhiêu?", options: ["9", "-9", "8.1", "18"], correct: 0 },
    { id: 8, text: "Một hình vuông có cạnh dài 5cm. Chu vi của hình vuông đó là?", options: ["25cm", "10cm", "20cm", "15cm"], correct: 2 },
    { id: 9, text: "Số nào sau đây chia hết cho cả 2 and 5?", options: ["125", "232", "340", "503"], correct: 2 },
    { id: 10, text: "Tam giác có một góc vuông được gọi là tam giác gì?", options: ["Tam giác đều", "Tam giác cân", "Tam giác vuông", "Tam giác nhọn"], correct: 2 },
    { id: 11, text: "Số đối của -7 là số nào?", options: ["7", "-7", "1/7", "-1/7"], correct: 0 },
    { id: 12, text: "Nếu x/4 = 5/2 thì giá trị của x là?", options: ["10", "2.5", "20", "8"], correct: 0 },
    { id: 13, text: "Tìm x biết x² = 16?", options: ["x = 4", "x = -4", "x = 4 hoặc x = -4", "x = 8"], correct: 2 },
    { id: 14, text: "Số lớn nhất có 2 chữ số khác nhau là?", options: ["99", "98", "90", "89"], correct: 1 },
    { id: 15, text: "Một lớp học có 40 học sinh, trong đó có 40% là nữ. Số học sinh nữ là?", options: ["16", "20", "24", "10"], correct: 0 },
    { id: 16, text: "Phép tính 2 mũ 5 (2⁵) có kết quả bằng bao nhiêu?", options: ["10", "16", "32", "64"], correct: 2 },
    { id: 17, text: "Trong hình chữ nhật, hai đường chéo có tính chất nào sau đây?", options: ["Vuông góc", "Bằng nhau", "Là đường phân giác", "Song song"], correct: 1 },
    { id: 18, text: "Tập hợp các số nguyên được ký hiệu bằng chữ cái nào?", options: ["N", "Z", "Q", "R"], correct: 1 },
    { id: 19, text: "Công thức tính diện tích hình tam giác có cạnh đáy a và chiều cao h là?", options: ["a × h", "(a × h) / 2", "a + h", "2 × (a + h)"], correct: 1 }
  ],

  // id: 4 -> Văn học (10 questions)
  4: [
    { id: 1, text: "Tác giả của kiệt tác 'Truyện Kiều' là danh nhân văn hóa nào?", options: ["Nguyễn Trãi", "Nguyễn Du", "Đoàn Thị Điểm", "Hồ Xuân Hương"], correct: 1 },
    { id: 2, text: "Tên gốc lúc đầu của tác phẩm 'Truyện Kiều' là gì?", options: ["Đoạn trường tân thanh", "Kim Vân Kiều truyện", "Kiều ca", "Đoạn trường vô thanh"], correct: 0 },
    { id: 3, text: "Truyện Kiều được viết theo thể thơ truyền thống nào của Việt Nam?", options: ["Thơ Tự do", "Song thất lục bát", "Lục bát", "Thất ngôn tứ tuyệt"], correct: 2 },
    { id: 4, text: "Nhân vật Thúy Kiều mang họ gì?", options: ["Họ Vương", "Họ Nguyễn", "Họ Thúc", "Họ Kim"], correct: 0 },
    { id: 5, text: "Người tình đầu tiên sâu đậm, thề nguyền đính ước với Thúy Kiều là ai?", options: ["Thúc Sinh", "Từ Hải", "Kim Trọng", "Mã Giám Sinh"], correct: 2 },
    { id: 6, text: "Em gái của Thúy Kiều, người đã nhận lời trao duyên thay chị là ai?", options: ["Thúy Vân", "Hoạn Thư", "Đạm Tiên", "Kiều Nguyệt Nga"], correct: 0 },
    { id: 7, text: "Nhân vật nào đại diện cho hình tượng người anh hùng hào kiệt trong tác phẩm?", options: ["Kim Trọng", "Thúc Sinh", "Từ Hải", "Mã Giám Sinh"], correct: 2 },
    { id: 8, text: "Cụm từ điển tích 'Ghen ghét bờ tường' ám chỉ tính cách ghen tuông của nhân vật nào?", options: ["Thúy Vân", "Hoạn Thư", "Tú Bà", "Mã Kiều"], correct: 1 },
    { id: 9, text: "Tổng số câu thơ lục bát xuất hiện trong tác phẩm Truyện Kiều là bao nhiêu câu?", options: ["3254 câu", "3245 câu", "2354 câu", "3425 câu"], correct: 0 },
    { id: 10, text: "Tác phẩm Truyện Kiều phản ánh sâu sắc giá trị nào dưới đây?", options: ["Giá trị hiện thực và nhân đạo", "Giá trị chiến đấu vũ trang", "Giá trị châm biếm phương Tây", "Giá trị khoa học công nghệ"], correct: 0 }
  ],

  // id: 5 -> Sinh học (12 questions)
  5: [
    { id: 1, text: "Sinh vật nào sau đây thuộc nhóm động vật có xương sống?", options: ["Giun đất", "Cá chép", "Ốc sên", "San hô"], correct: 1 },
    { id: 2, text: "Đơn vị phân loại nhỏ nhất trong hệ thống phân loại sinh vật là?", options: ["Loài", "Chi", "Họ", "Bộ"], correct: 0 },
    { id: 3, text: "Nhóm sinh vật nào có khả năng tự dưỡng nhờ quang hợp?", options: ["Nấm", "Động vật", "Thực vật", "Vi khuẩn ký sinh"], correct: 2 },
    { id: 4, text: "Cơ quan hô hấp của cá là gì?", options: ["Phổi", "Mang", "Da", "Khí quản"], correct: 1 },
    { id: 5, text: "Động vật nào sau đây là động vật biến nhiệt?", options: ["Chim", "Thú", "Ếch", "Cá voi"], correct: 2 },
    { id: 6, text: "Thực vật có mạch dẫn tiêu biểu gồm nhóm nào?", options: ["Rêu", "Dương xỉ", "Tảo", "Nấm"], correct: 1 },
    { id: 7, text: "Cây hút nước chủ yếu nhờ cơ quan nào?", options: ["Lá", "Hoa", "Rễ", "Quả"], correct: 2 },
    { id: 8, text: "Hiện tượng gì xảy ra khi cây thiếu nước trầm trọng?", options: ["Cây héo", "Cây ra hoa", "Cây cao lên", "Cây xanh hơn"], correct: 0 },
    { id: 9, text: "Sinh vật nào sau đây sống ký sinh?", options: ["Sán lá gan", "Cá vàng", "Mèo", "Cỏ"], correct: 0 },
    { id: 10, text: "Nhóm thức ăn nào giàu đạm (protein)?", options: ["Cơm", "Thịt, cá", "Đường", "Rau xanh"], correct: 1 },
    { id: 11, text: "Loài nào được xem là có quan hệ họ hàng gần gũi nhất với loài người?", options: ["Tinh tinh", "Cá heo", "Voi", "Gấu"], correct: 0 },
    { id: 12, text: "Đa dạng sinh học là gì?", options: ["Sự phong phú về loài và hệ sinh thái", "Số lượng cá thể trong bầy", "Kích thước cơ thể sinh vật", "Màu sắc của thực vật"], correct: 0 }
  ],

  // id: 6 -> Sử học (15 questions)
  6: [
    { id: 1, text: "Nhà nước Văn Lang do ai đứng đầu?", options: ["Hùng Vương", "Thục Phán", "Lê Lợi", "Đinh Bộ Lĩnh"], correct: 0 },
    { id: 2, text: "Kinh đô của nhà nước Văn Lang đặt tại đâu?", options: ["Cổ Loa", "Phong Châu (Phú Thọ)", "Hoa Lư", "Thăng Long"], correct: 1 },
    { id: 3, text: "Nhà Lý đổi tên nước thành Đại Việt vào năm nào?", options: ["1054", "1010", "1075", "1225"], correct: 0 },
    { id: 4, text: "Hội nghị Diên Hồng gắn với triều đại nào?", options: ["Nhà Lê", "Nhà Lý", "Nhà Trần", "Nhà Nguyễn"], correct: 2 },
    { id: 5, text: "Đinh Bộ Lĩnh thống nhất đất nước, lập ra triều đại nào?", options: ["Nhà Đinh", "Nhà Lý", "Nhà Lê", "Nhà Trần"], correct: 0 },
    { id: 6, text: "Ai là vị vua dời đô từ Hoa Lư về Thăng Long?", options: ["Lý Công Uẩn (Lý Thái Tổ)", "Lê Hoàn", "Đinh Tiên Hoàng", "Trần Thái Tông"], correct: 0 },
    { id: 7, text: "Nhà Trần thành lập vào năm nào?", options: ["1225", "1010", "1054", "1400"], correct: 0 },
    { id: 8, text: "Ba lần kháng chiến chống quân Nguyên - Mông diễn ra dưới triều đại nào?", options: ["Nhà Trần", "Nhà Lý", "Nhà Lê", "Nhà Đinh"], correct: 0 },
    { id: 9, text: "Ai chỉ huy trận Bạch Đằng năm 1288 đánh bại quân Nguyên?", options: ["Trần Hưng Đạo", "Lê Lợi", "Nguyễn Huệ", "Đinh Bộ Lĩnh"], correct: 0 },
    { id: 10, text: "Lê Lợi lãnh đạo khởi nghĩa Lam Sơn chống quân xâm lược nào?", options: ["Minh", "Nguyên", "Mông", "Tống"], correct: 0 },
    { id: 11, text: "Nguyễn Huệ lên ngôi hoàng đế (Quang Trung) năm nào?", options: ["1788", "1789", "1778", "1802"], correct: 0 },
    { id: 12, text: "Chiến thắng Ngọc Hồi - Đống Đa gắn với vị anh hùng nào?", options: ["Nguyễn Huệ (Quang Trung)", "Lý Thường Kiệt", "Trần Hưng Đạo", "Ngô Quyền"], correct: 0 },
    { id: 13, text: "Triều đại phong kiến cuối cùng của Việt Nam là?", options: ["Nhà Nguyễn", "Nhà Lê", "Nhà Trần", "Nhà Tây Sơn"], correct: 0 },
    { id: 14, text: "Cách mạng tháng Tám thành công năm nào?", options: ["1945", "1946", "1954", "1930"], correct: 0 },
    { id: 15, text: "Chiến dịch Điện Biên Phủ kết thúc thắng lợi năm nào?", options: ["1954", "1955", "1945", "1968"], correct: 0 }
  ],

  // id: 7 -> Toán học (20 questions)
  7: [
    { id: 1, text: "Số nào sau đây là số chính phương?", options: ["12", "16", "18", "20"], correct: 1 },
    { id: 2, text: "Ước chung lớn nhất của 12 và 18 là?", options: ["2", "3", "6", "9"], correct: 2 },
    { id: 3, text: "Bội chung nhỏ nhất của 4 và 6 là?", options: ["12", "24", "8", "6"], correct: 0 },
    { id: 4, text: "Giá trị của biểu thức 7 × 8 - 6 là?", options: ["50", "56", "48", "42"], correct: 0 },
    { id: 5, text: "Số La Mã XIV biểu diễn số nào?", options: ["14", "16", "4", "19"], correct: 0 },
    { id: 6, text: "Phân số nào lớn nhất?", options: ["1/2", "2/3", "3/4", "4/5"], correct: 3 },
    { id: 7, text: "Nếu 3x = 27 thì x bằng bao nhiêu?", options: ["6", "9", "8", "3"], correct: 1 },
    { id: 8, text: "Diện tích hình chữ nhật dài 8cm, rộng 5cm là?", options: ["13 cm²", "40 cm²", "26 cm²", "30 cm²"], correct: 1 },
    { id: 9, text: "Chu vi hình tròn bán kính 7 (lấy π ≈ 22/7) là?", options: ["44", "154", "22", "49"], correct: 0 },
    { id: 10, text: "Số nguyên tố tiếp theo sau 7 là?", options: ["8", "9", "11", "13"], correct: 2 },
    { id: 11, text: "Giá trị của √144 là?", options: ["12", "14", "16", "11"], correct: 0 },
    { id: 12, text: "Tổng số đo bốn góc trong một tứ giác là?", options: ["180°", "270°", "360°", "90°"], correct: 2 },
    { id: 13, text: "25% của 80 là bao nhiêu?", options: ["15", "20", "25", "30"], correct: 1 },
    { id: 14, text: "Số nào sau đây chia hết cho 9?", options: ["123", "135", "146", "157"], correct: 1 },
    { id: 15, text: "Nếu y = 2x + 1 và x = 4 thì y bằng?", options: ["7", "8", "9", "10"], correct: 2 },
    { id: 16, text: "Trung bình cộng của 4, 6, 8, 10 là?", options: ["6", "7", "8", "9"], correct: 1 },
    { id: 17, text: "Hình lập phương có bao nhiêu mặt?", options: ["4", "6", "8", "12"], correct: 1 },
    { id: 18, text: "Giá trị của 3² + 4² là?", options: ["25", "12", "7", "24"], correct: 0 },
    { id: 19, text: "Số nào sau đây là số nguyên âm?", options: ["0", "-5", "3", "7"], correct: 1 },
    { id: 20, text: "Trong tam giác vuông, bình phương cạnh huyền bằng?", options: ["Tổng hai cạnh góc vuông", "Tổng bình phương hai cạnh góc vuông", "Hiệu hai cạnh góc vuông", "Tích hai cạnh góc vuông"], correct: 1 }
  ],

  // id: 8 -> Văn học (12 questions)
  8: [
    { id: 1, text: "Ai là tác giả của tiểu thuyết 'Tắt đèn'?", options: ["Ngô Tất Tố", "Nam Cao", "Nguyễn Du", "Vũ Trọng Phụng"], correct: 0 },
    { id: 2, text: "Tác phẩm 'Chí Phèo' do ai sáng tác?", options: ["Nam Cao", "Ngô Tất Tố", "Thạch Lam", "Tô Hoài"], correct: 0 },
    { id: 3, text: "Nhân vật chính trong 'Tắt đèn' là ai?", options: ["Chị Dậu", "Chí Phèo", "Lão Hạc", "Anh Pha"], correct: 0 },
    { id: 4, text: "Tác phẩm 'Số đỏ' của tác giả nào?", options: ["Vũ Trọng Phụng", "Nam Cao", "Nguyễn Công Hoan", "Thạch Lam"], correct: 0 },
    { id: 5, text: "'Lão Hạc' là tác phẩm của ai?", options: ["Nam Cao", "Ngô Tất Tố", "Tô Hoài", "Nguyên Hồng"], correct: 0 },
    { id: 6, text: "Thể loại của 'Dế Mèn phiêu lưu ký' là?", options: ["Truyện đồng thoại", "Tiểu thuyết lịch sử", "Ký sự", "Thơ"], correct: 0 },
    { id: 7, text: "Tác giả của 'Dế Mèn phiêu lưu ký' là?", options: ["Tô Hoài", "Thạch Lam", "Nam Cao", "Vũ Trọng Phụng"], correct: 0 },
    { id: 8, text: "'Qua Đèo Ngang' là tác phẩm của ai?", options: ["Bà Huyện Thanh Quan", "Hồ Xuân Hương", "Nguyễn Du", "Đoàn Thị Điểm"], correct: 0 },
    { id: 9, text: "Bài thơ 'Bạn đến chơi nhà' của tác giả nào?", options: ["Nguyễn Khuyến", "Hồ Xuân Hương", "Trần Tế Xương", "Bà Huyện Thanh Quan"], correct: 0 },
    { id: 10, text: "'Nhớ rừng' là bài thơ của ai?", options: ["Thế Lữ", "Xuân Diệu", "Huy Cận", "Tố Hữu"], correct: 0 },
    { id: 11, text: "'Tây Tiến' là tác phẩm của nhà thơ nào?", options: ["Quang Dũng", "Huy Cận", "Xuân Diệu", "Chế Lan Viên"], correct: 0 },
    { id: 12, text: "Nhân vật Tnú xuất hiện trong tác phẩm nào?", options: ["Rừng xà nu", "Chiếc lược ngà", "Lặng lẽ Sa Pa", "Vợ nhặt"], correct: 0 }
  ],

  // id: 9 -> Sinh học (15 questions)
  9: [
    { id: 1, text: "Cơ quan nào bơm máu đi khắp cơ thể?", options: ["Tim", "Gan", "Phổi", "Thận"], correct: 0 },
    { id: 2, text: "Xương nào dài nhất trong cơ thể người?", options: ["Xương đùi", "Xương cánh tay", "Xương sườn", "Xương chày"], correct: 0 },
    { id: 3, text: "Cơ quan chính hấp thụ chất dinh dưỡng là?", options: ["Ruột non", "Dạ dày", "Thực quản", "Ruột già"], correct: 0 },
    { id: 4, text: "Người trưởng thành có bao nhiêu xương?", options: ["206", "300", "150", "120"], correct: 0 },
    { id: 5, text: "Cơ quan nào sản xuất mật?", options: ["Gan", "Túi mật", "Tụy", "Thận"], correct: 0 },
    { id: 6, text: "Hệ cơ quan nào điều khiển và điều hòa hoạt động cơ thể?", options: ["Hệ thần kinh", "Hệ tuần hoàn", "Hệ hô hấp", "Hệ tiêu hóa"], correct: 0 },
    { id: 7, text: "Đơn vị cấu tạo nên thận là?", options: ["Nephron", "Phế nang", "Tế bào gan", "Nơron"], correct: 0 },
    { id: 8, text: "Tại phổi diễn ra sự trao đổi khí nào?", options: ["Oxy và CO2", "Nitơ và Oxy", "Hơi nước và Nitơ", "CO2 và Heli"], correct: 0 },
    { id: 9, text: "Máu được lọc bỏ chất thải chủ yếu ở cơ quan nào?", options: ["Thận", "Tim", "Phổi", "Gan"], correct: 0 },
    { id: 10, text: "Tế bào thần kinh còn được gọi là?", options: ["Nơron", "Nephron", "Bạch cầu", "Hồng cầu"], correct: 0 },
    { id: 11, text: "Cơ quan nào tiết ra insulin?", options: ["Tụy", "Gan", "Thận", "Lách"], correct: 0 },
    { id: 12, text: "Hai lá phổi nằm trong khoang nào?", options: ["Khoang ngực", "Khoang bụng", "Khoang chậu", "Khoang sọ"], correct: 0 },
    { id: 13, text: "Chức năng chính của hồng cầu là?", options: ["Vận chuyển oxy", "Tiêu diệt vi khuẩn", "Đông máu", "Tiết hormone"], correct: 0 },
    { id: 14, text: "Bộ phận nào tiếp nhận ánh sáng ở mắt?", options: ["Võng mạc", "Giác mạc", "Thủy tinh thể", "Mống mắt"], correct: 0 },
    { id: 15, text: "Da có chức năng nào sau đây?", options: ["Bảo vệ và điều hòa nhiệt độ", "Sản xuất mật", "Hấp thụ oxy", "Tiết insulin"], correct: 0 }
  ],

  // id: 10 -> Sử học (20 questions)
  10: [
    { id: 1, text: "Thế chiến thứ nhất kết thúc năm nào?", options: ["1918", "1914", "1939", "1945"], correct: 0 },
    { id: 2, text: "Thế chiến thứ hai bắt đầu năm nào?", options: ["1939", "1941", "1914", "1945"], correct: 0 },
    { id: 3, text: "Cách mạng tháng Mười Nga diễn ra năm nào?", options: ["1917", "1905", "1922", "1918"], correct: 0 },
    { id: 4, text: "Tuyên ngôn Độc lập của Mỹ được ký năm nào?", options: ["1776", "1789", "1775", "1783"], correct: 0 },
    { id: 5, text: "Cách mạng Pháp bùng nổ năm nào?", options: ["1789", "1776", "1799", "1783"], correct: 0 },
    { id: 6, text: "Liên bang Xô Viết tan rã năm nào?", options: ["1991", "1989", "1985", "1979"], correct: 0 },
    { id: 7, text: "Ngày Quốc khánh Việt Nam là ngày nào?", options: ["2/9/1945", "30/4/1975", "7/5/1954", "1/5/1945"], correct: 0 },
    { id: 8, text: "Chiến tranh thế giới thứ hai kết thúc năm nào?", options: ["1945", "1939", "1918", "1946"], correct: 0 },
    { id: 9, text: "Bức tường Berlin sụp đổ năm nào?", options: ["1989", "1991", "1985", "1979"], correct: 0 },
    { id: 10, text: "Việt Nam gia nhập ASEAN năm nào?", options: ["1995", "1996", "1997", "1998"], correct: 0 },
    { id: 11, text: "Hiệp định Genève được ký năm nào?", options: ["1954", "1955", "1953", "1956"], correct: 0 },
    { id: 12, text: "Hiệp định Paris được ký năm nào?", options: ["1973", "1972", "1974", "1975"], correct: 0 },
    { id: 13, text: "Việt Nam gia nhập WTO năm nào?", options: ["2007", "2006", "2008", "2005"], correct: 0 },
    { id: 14, text: "Sự kiện 11/9 tại Mỹ xảy ra năm nào?", options: ["2001", "2000", "2002", "1999"], correct: 0 },
    { id: 15, text: "Đại dịch COVID-19 bùng phát toàn cầu năm nào?", options: ["2020", "2019", "2021", "2018"], correct: 0 },
    { id: 16, text: "Ngày Giải phóng miền Nam, thống nhất đất nước là ngày nào?", options: ["30/4/1975", "30/4/1976", "2/9/1975", "1/5/1975"], correct: 0 },
    { id: 17, text: "Sài Gòn được đổi tên thành Thành phố Hồ Chí Minh năm nào?", options: ["1976", "1975", "1977", "1978"], correct: 0 },
    { id: 18, text: "Hiến pháp đầu tiên của Việt Nam ra đời năm nào?", options: ["1946", "1945", "1954", "1959"], correct: 0 },
    { id: 19, text: "Quốc hội khóa đầu tiên của Việt Nam họp năm nào?", options: ["1946", "1945", "1954", "1960"], correct: 0 },
    { id: 20, text: "Việt Nam lần đầu đảm nhiệm Ủy viên không thường trực Hội đồng Bảo an Liên Hợp Quốc năm nào?", options: ["2008", "2007", "2010", "2005"], correct: 0 }
  ],

  // id: 11 -> Toán học (15 questions)
  11: [
    { id: 1, text: "Một cây bút giá 5.000đ. Mua 12 cây hết bao nhiêu tiền?", options: ["60.000đ", "50.000đ", "55.000đ", "65.000đ"], correct: 0 },
    { id: 2, text: "Đi quãng đường 60km trong 1,5 giờ thì vận tốc là?", options: ["40 km/h", "30 km/h", "45 km/h", "50 km/h"], correct: 0 },
    { id: 3, text: "Một hình chữ nhật dài 10m, rộng 6m có diện tích là?", options: ["60 m²", "16 m²", "32 m²", "50 m²"], correct: 0 },
    { id: 4, text: "Mua 5kg gạo giá 90.000đ. Giá 1kg gạo là bao nhiêu?", options: ["18.000đ", "15.000đ", "20.000đ", "16.000đ"], correct: 0 },
    { id: 5, text: "Một người đi 3 giờ với vận tốc 12 km/h được quãng đường là?", options: ["36 km", "24 km", "30 km", "40 km"], correct: 0 },
    { id: 6, text: "Giảm 20% của 250.000đ là bao nhiêu?", options: ["200.000đ", "220.000đ", "230.000đ", "180.000đ"], correct: 0 },
    { id: 7, text: "Một bể có 200 lít nước, dùng hết 40%. Số nước còn lại là?", options: ["120 lít", "80 lít", "140 lít", "160 lít"], correct: 0 },
    { id: 8, text: "3 công nhân làm xong việc trong 6 ngày. Hỏi 6 công nhân (năng suất như nhau) làm trong bao lâu?", options: ["3 ngày", "6 ngày", "12 ngày", "2 ngày"], correct: 0 },
    { id: 9, text: "Mua 2 vé giá 120.000đ. Mua 5 vé hết bao nhiêu?", options: ["300.000đ", "240.000đ", "360.000đ", "280.000đ"], correct: 0 },
    { id: 10, text: "Một lớp có 40 học sinh, 60% là nữ. Số học sinh nam là?", options: ["16", "24", "20", "18"], correct: 0 },
    { id: 11, text: "Tiền lãi 5% của 2.000.000đ là bao nhiêu?", options: ["100.000đ", "50.000đ", "200.000đ", "150.000đ"], correct: 0 },
    { id: 12, text: "Một hình vuông cạnh 9cm có chu vi là?", options: ["36 cm", "81 cm", "18 cm", "27 cm"], correct: 0 },
    { id: 13, text: "Đổi 2,5 giờ ra phút là?", options: ["150 phút", "120 phút", "180 phút", "100 phút"], correct: 0 },
    { id: 14, text: "Một cuốn sách dày 300 trang. Đọc 2/5 số trang là bao nhiêu trang?", options: ["120 trang", "150 trang", "100 trang", "180 trang"], correct: 0 },
    { id: 15, text: "Một cái áo giá 400.000đ được giảm giá 25%. Giá sau khi giảm là?", options: ["300.000đ", "320.000đ", "280.000đ", "350.000đ"], correct: 0 }
  ],

  // id: 12 -> Văn học (15 questions)
  12: [
    { id: 1, text: "Tác giả của 'Truyền kỳ mạn lục' là ai?", options: ["Nguyễn Dữ", "Nguyễn Trãi", "Lê Thánh Tông", "Nguyễn Du"], correct: 0 },
    { id: 2, text: "'Bình Ngô đại cáo' do ai viết?", options: ["Nguyễn Trãi", "Nguyễn Du", "Trần Hưng Đạo", "Lê Lợi"], correct: 0 },
    { id: 3, text: "Tác phẩm 'Hịch tướng sĩ' gắn với vị anh hùng nào?", options: ["Trần Hưng Đạo", "Nguyễn Huệ", "Lê Lợi", "Ngô Quyền"], correct: 0 },
    { id: 4, text: "'Chiếu dời đô' là tác phẩm của ai?", options: ["Lý Công Uẩn", "Lý Thường Kiệt", "Trần Nhân Tông", "Nguyễn Trãi"], correct: 0 },
    { id: 5, text: "Bài thơ 'Nam quốc sơn hà' tương truyền của ai?", options: ["Lý Thường Kiệt", "Nguyễn Trãi", "Trần Quốc Toản", "Phạm Ngũ Lão"], correct: 0 },
    { id: 6, text: "'Thuật hoài' là tác phẩm của ai?", options: ["Phạm Ngũ Lão", "Trần Quốc Toản", "Lý Thường Kiệt", "Nguyễn Du"], correct: 0 },
    { id: 7, text: "Chữ Quốc ngữ được hình thành dựa trên hệ chữ nào?", options: ["La-tinh", "Hán", "Nôm", "Phạn"], correct: 0 },
    { id: 8, text: "Bản diễn Nôm 'Chinh phụ ngâm' thường được cho là của ai?", options: ["Đoàn Thị Điểm", "Hồ Xuân Hương", "Bà Huyện Thanh Quan", "Nguyễn Du"], correct: 0 },
    { id: 9, text: "Hồ Xuân Hương nổi tiếng với thể loại thơ nào?", options: ["Thơ Nôm trào phúng", "Thơ chữ Hán", "Truyện truyền kỳ", "Ký sự"], correct: 0 },
    { id: 10, text: "Tác phẩm 'Lục Vân Tiên' do ai sáng tác?", options: ["Nguyễn Đình Chiểu", "Nguyễn Du", "Nguyễn Trãi", "Hồ Xuân Hương"], correct: 0 },
    { id: 11, text: "'Văn tế nghĩa sĩ Cần Giuộc' là tác phẩm của ai?", options: ["Nguyễn Đình Chiểu", "Nguyễn Khuyến", "Trần Tế Xương", "Cao Bá Quát"], correct: 0 },
    { id: 12, text: "Phong trào Thơ Mới diễn ra vào khoảng thời gian nào?", options: ["1932-1945", "1900-1930", "1945-1954", "1954-1975"], correct: 0 },
    { id: 13, text: "'Đây thôn Vĩ Dạ' là bài thơ của ai?", options: ["Hàn Mặc Tử", "Xuân Diệu", "Huy Cận", "Thế Lữ"], correct: 0 },
    { id: 14, text: "Nhà thơ được mệnh danh 'ông hoàng thơ tình' là ai?", options: ["Xuân Diệu", "Huy Cận", "Hàn Mặc Tử", "Chế Lan Viên"], correct: 0 },
    { id: 15, text: "Tác phẩm 'Vợ nhặt' của tác giả nào?", options: ["Kim Lân", "Nam Cao", "Nguyên Hồng", "Tô Hoài"], correct: 0 }
  ]
};

export default examQuestions;
