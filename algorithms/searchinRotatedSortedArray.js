/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
	if (!nums.length) return -1;
	if (nums.length === 1) return target === nums[0] ? 0 : -1;

	var pivot = 0,
		val,
		nextVal;

	while(pivot < nums.length - 1) {
		val = nums[pivot],
		nextVal = nums[pivot + 1];
		if (nextVal < val) {
			break;
		}
		pivot++;
	}

	var left = binarySearch(0, pivot),
		right = binarySearch(pivot + 1, nums.length);

	return left === -1 ? right : left;
	
	function binarySearch(startIdx, endIdx) {
		var left = nums[startIdx],
			right = nums[endIdx],
			midIdx = Math.floor((startIdx + endIdx) / 2) 
			mid = nums[midIdx];

		if (startIdx === endIdx) {
			return left === target ? startIdx : -1; 
		}

		if (startIdx + 1 === endIdx) {
			return left === target ? startIdx :
				right === target ? endIdx : -1;
		}

		return mid > target ? binarySearch(startIdx, midIdx) : binarySearch(midIdx, endIdx);
	}
};