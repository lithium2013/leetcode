/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (!nums || nums.length < 4) return [];

    nums.sort(function(a, b) {
        return a - b;
    });

    var res = [];

    for (var i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) continue;

        for (var j = i + 1; j < nums.length; j++) {
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue;

            var left = j + 1,
                right = nums.length - 1,
                ival = nums[i],
                jval = nums[j];

            while (left < right) {
                var min = nums[left],
                    max = nums[right],
                    sum = min + max + ival + jval;
                
                if (sum === target) {
                    while(nums[left] === nums[++left]);
                    while(nums[right] === nums[--right]);
                    res.push([ival, jval, min, max]);
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }    

    return res;
};