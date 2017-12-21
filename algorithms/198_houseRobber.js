/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	if (!nums.length) return 0;

	var store = [];

	return _rob(nums.length - 1);

	function _rob(end) {
		if (typeof store[end] === 'number') return store[end];

		if (end === 0){
			store[0] = nums[0];
		} else if (end === 1){
			store[1] = Math.max(nums[0], nums[1]);
		} else {
			store[end] = Math.max(
				_rob(end - 1),
				_rob(end - 2) + nums[end]
			);
		} 

		return store[end];
	}
};