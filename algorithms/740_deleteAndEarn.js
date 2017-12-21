/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
	var map = {},
		keys,
		store = []; 
	
	if (!nums.length) return 0;

	for (var i = 0; i < nums.length; i++) {
		var n = nums[i]

		if (map[n] === undefined) {
			map[n] = n;
		} else {
			map[n] += n;
		}
	}

	return _earn(Math.max.apply(null, nums));
	
	function getValue(number) {
		return map[number] || 0;
	}
	
	function _earn(end) {
		if (store[end] !== undefined) return store[end];

		if (end === 0) {
			store[0] = getValue(0);
		} else if (end === 1) {
			store[1] = Math.max(getValue(0), getValue(1));
		} else {
			store[end] = Math.max(
				_earn(end - 1),
				_earn(end - 2) + getValue(end)
			);
		}

		return store[end];
	}
	
};