/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	if (!nums.length || nums.length === 1) return 0;

	var
		// step => positions
		stepsTokenCanArrive = {
			0: [0]
		},
		// position => step
		stepsNeededToPosition = {
			0: 0
		};
	
	for (var step = 0; step < nums.length; step++) {
		var canArrive = stepsTokenCanArrive[step];

		for (var j = 0; j < canArrive.length; j++) {
			var curPosition = canArrive[j],
				maxStep = nums[curPosition];

			for (var k = 1; k <= maxStep; k++) {
				if (curPosition + k === nums.length - 1) return step + 1;
				updateStepsNeeded(curPosition + k, step + 1);
				updateStepsToken(step + 1, curPosition + k);
			}
		}
	}
	
	function updateStepsToken(steps, position) {
		var needed = stepsNeededToPosition[position];

		if (steps >= nums.length || position >= nums.length) return;
		if (needed && steps > needed) return;
		if (!stepsTokenCanArrive[steps]) stepsTokenCanArrive[steps] = [];
		stepsTokenCanArrive[steps].push(position);
	}

	function updateStepsNeeded(position, steps) {
		if (steps >= nums.length || position >= nums.length) return;

		var curNeed = stepsNeededToPosition[position];

		if (!curNeed || steps < curNeed) stepsNeededToPosition[position] = steps; 
	}

};