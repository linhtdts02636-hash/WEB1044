/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let valids = [];
  let results = [];
  let isTarget = false
  for(num of nums){
        if (target - num == 0) {
      results.push(num);
      isTarget = true
    } else
    if (target - num > 0) {
      valids.push(num);
    }
    
  };

if(!isTarget){
  for(let i = 0; i<valids.length;i++){
    for(let j = i+1; j<valids.length;j++){
        if(valids[i]+valids[j]==target){
            results = [i, j]
        }
    }
  }
    }


    return results

};
// when array nums are passed, for each number, if target subtract by them and doesnt go negative, they should be added into an array.

// then we plus those arrays left to right. 

let nums =
[0,4,3,0]

let target = 0

twoSum(nums,target)