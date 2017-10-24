/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [],
        left, right,
        set = {},
        numMap = {},
        numKeys,
        newNums = [];

    if (nums.length < 3) return [];

    for (var k = 0; k < nums.length; ++k) {
        if (numMap[nums[k]]) {
            numMap[nums[k]]++;
        } else {
            numMap[nums[k]] = 1;
        }
    }

    numKeys = Object.keys(numMap);
    for (k = 0; k < numKeys.length; ++k) {
        var val = parseInt(numKeys[k]);

        if (numMap[val] === 1) {
            newNums.push(val);
        } else if (numMap[val] === 2) {
            newNums.push(val);
            newNums.push(val);
        } else {
            newNums.push(val);
            newNums.push(val);
            val === 0 && newNums.push(0);
        }
    }
    nums = newNums;
    nums.sort(function(a, b) {
        return a - b;
    });    
    for(var i = 0; i < nums.length; ++i) {
        left = i + 1;
        right = nums.length - 1;

        while(left < right) {
            var lval = nums[left],
                rval = nums[right],
                signal = lval + rval + nums[i],
                key;

            if (signal === 0) {
                key = getKey([nums[i], lval, rval]);
                if (!set[key]) {
                    set[key] = true;
                    res.push([nums[i], lval, rval]);
                }
                left++;
                right--;
            } else if (signal < 0 ) {
                left++;
            } else {
                right--;
            }
        }
    }

    function getKey(arr) {
        return arr[0].toString() + arr[1].toString() + arr[2].toString();
    }

    return res;
};