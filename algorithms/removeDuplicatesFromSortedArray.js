/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (!nums || !nums.length) return nums;
    
    var max = nums[0],
        length = 1;
    
    for (var i = 1; i < nums.length; ++i) {
        if(nums[i] > max) {
            max = nums[i];
            nums[length] = max;
            length++;
        }
    }
    
    return length;
};