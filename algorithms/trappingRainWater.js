/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
	if (!height || height.length <= 1) return 0;

	var leftMax = [],
		rightMax = [],
		curMax = 0,
		result = 0;
	
	for (var i = 0; i < height.length; i++) {
		curMax = Math.max(curMax, height[i]);
		leftMax.push(curMax);
	}

	curMax = 0;
	for (i = height.length - 1; i >= 0; i--) {
		curMax = Math.max(curMax, height[i]);
		rightMax.unshift(curMax);
	}
    

	for (var i = 0; i < height.length; i++) {
		var lx = leftMax[i],
			rx = rightMax[i]
			cur = Math.min(lx, rx),
			delta = cur - height[i];

		result += (delta > 0 ? delta : 0);
	}

	return result;
};