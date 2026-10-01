//bai 4
// Viết hàm chuẩn hoá câu: chuyển tất cả các ký tự đầu của mỗi từ thành viết hoa, xoá
// các khoảng trắng dư thừa ở đầu câu, trong câu và cuối câu:
// Ví dụ:
// Input: " xin chao cac ban. hom nay troi dep qua !toi di hoc ve ? "
// Output: "Xin chao cac ban. Hom nay troi dep qua! Toi di hoc ve?"

function normalizeSentence(input) {
  if (!input) {
    return "actually type something you silly willy";
  }

  input = input.charAt(0).toUpperCase() + input.slice(1);

  input = input.trim().replace(/\s+/g, " ");

  input = input.trim().replace(/\s+[!?.]/g, (match) => {
    return match.trim();
  });

  input = input.trim().replace(/[!?.][a-zA-Z]/g, (match) => {
    return match.charAt(0) + ' '+ match.charAt(1).toUpperCase() + match.slice(2)
  });

    input = input.trim().replace(/[!?.]\s+[a-zA-Z]/g, (match) => {
    return match.charAt(0) +' '+ match.charAt(2).toUpperCase() + match.slice(3)
  });

  return input;
}

let str = " xin chao cac ban. hom nay troi dep qua !toi di hoc ve ? ";
console.log(normalizeSentence(str));
