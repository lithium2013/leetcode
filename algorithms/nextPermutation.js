/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	var len = nums.length;

	if (!nums || len <= 1) return;

	for (var i = len - 2; i >= 0; i--) {
		if (nums[i] > nums[i + 1]) continue;

		for (var j = i + 1; j < len; j++) {
			if ( nums[j] > nums[i] && (j + 1 >= len || nums[j + 1] <= nums[i]) ) {
				swap(i, j);
				reverse(j, len - 1);
				return;
			}
		}
	}	

	nums.reverse();

	return;j

	function swap(i, j) {
		nums[i] = nums[i] + nums[j];
		nums[j] = nums[i] - nums[j];
		nums[i] = nums[i] - nums[j];
	}

	function reverse(start, end) {
		while(start < end) {
			swap(start++, end--);
		}
	}
};
