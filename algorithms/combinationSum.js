/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
	var results = [];
	candidates.sort();

	fill([], 0);

	return results;

	function arraySum(arr) {
		if (!arr || !arr.length) return 0;

		return arr.reduce(function(prev, cur) {
			return prev + cur;
		});
	}

	function fill(curCombination, fromIdx) {
		var combination = curCombination.concat([]),
			sum = arraySum(combination);

		for (var i = fromIdx; i < candidates.length; i++) {
			if (candidates[i] + sum === target) {
				results.push(combination.concat([candidates[i]]));
			} else if (candidates[i] + sum < target) {
				fill(combination.concat([candidates[i]]), i);
			}
		}
	}
};
