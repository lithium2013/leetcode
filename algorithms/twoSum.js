/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var cache = [],
        diff;
    for(var i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if (cache[diff] !== undefined) return [i, cache[diff]];
        cache[nums[i]] = i;
    }
};