/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	var res = Infinity;

	if (typeof target !== 'number' || !nums || !nums.length || nums.length < 3) return null;

	nums.sort(function(n1, n2) {
		return n1 - n2;
	});

	for (var i = 0; i < nums.length; ++i) {
		if (i > 0 && nums[i] === nums[i-1]) continue;
		var val = nums[i],
			left = i + 1,
			right = nums.length - 1,
			curDelta,
			delta;

		while(left < right) {
			delta = val + nums[left] + nums[right] - target;
			curDelta = res - target;

			if (curDelta === 0) return res;
			if (Math.abs(delta) < Math.abs(curDelta)) {
				curDelta = delta;
				res = curDelta + target;
			} 
			if (delta < 0){
				++left;
			} else {
				--right;
			}
		}
	}
	return res;
};