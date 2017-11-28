/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    var length = nums.length;
    if (!length) return 1;
    for (var i = 0; i < length; i++) {
        while (nums[i] >= 0 && nums[i] !== i && nums[nums[i]] !== nums[i]) {
            //console.log(i, nums[i])
            swap(i, nums[i]);
        }
    }
    
    for (var i = 1; ; i++) {
        if (nums[i] !== i) return i;
    }
    
    function swap(i, j) {
        var tmp = nums[j];
        nums[j] = nums[i];
        nums[i] = tmp;
    }
};