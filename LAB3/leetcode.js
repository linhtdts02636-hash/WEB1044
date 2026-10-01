/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  let leftArr = [];
  let rightArr = [];
  let pos = (Number(String(x).length) - 1) / 2;
  if (String(x).length % 2 == 0) {
    return false;
  }
  //0-mid
  for (let i = 0; i < pos; i++) {
    let element = String(x).charAt(i);
    leftArr.push(element);
  }
  //end-mid
  for (let i = Number(String(x).length) - 1; i > pos; i = i - 1) {
    let element = String(x).charAt(i);
    rightArr.push(element);
  }

  if (JSON.stringify(leftArr) == JSON.stringify(rightArr)) {
    return true;
  } else {
    return false;
  }
}

let y = "racecar";

console.log(isPalindrome(y));

//take integer x, count its length then do length = length -1 then divide the length
// 11 = 11 - 1 = 10, 10/2 = 5, now we have the exact middle index
//then check from that position index, get 2 arrays and do a scan from left to right and right to left to put inside
// those arrays, line them up and if they match, return true
