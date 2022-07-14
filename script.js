/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // array of final result
    const result = [];
    
    // loop through the nums array and check for a number and its complementary number that adds up to target number
  for(let i = 0; i < nums.length; i++){
      let complementaryNumber = target - nums[i];
      let complementaryNumberIndex = nums.indexOf(complementaryNumber, i+1);
      
    // if complementary number exists push it into result array
      if(complementaryNumberIndex != -1){
          result.push(i, complementaryNumberIndex);
          break;
      }
  }
    return result;
};