/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
	if (!nums.length) return [-1, -1];
	
	var left = binarySearchMin(0, nums.length),
		right = binarySearchMax(0, nums.length);
	
	return [left, right];

	function binarySearchMax(start, end) {
		var res;

		if (start === end - 1) {
			return nums[start] === target ? start : -1;
		}

		var mid = Math.floor((start + end) / 2),
			midVal = nums[mid];

		if (midVal > target) {
			return binarySearchMax(start, mid);
		}

		if (midVal < target) {
			return binarySearchMax(mid, end);
		}

		if (midVal === target) {
			res = binarySearchMax(mid, end);
			return res === -1 ? mid : res;
		}
	}

	function binarySearchMin(start, end) {
		var res;

		if (start === end - 1) {
			return nums[start] === target ? start : -1;
		}

		var mid = Math.floor((start + end) / 2),
			midVal = nums[mid];

		if (midVal > target) {
			return binarySearchMin(start, mid);
		}

		if (midVal < target) {
			return binarySearchMin(mid, end);
		}

		if (midVal === target) {
			res = binarySearchMin(start, mid);
			return res === -1 ? mid : res;
		}
	}
};