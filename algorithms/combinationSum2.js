/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
	candidates.sort(function(a, b){
		return a - b;
	});

	var results = [],
		resHash = {},
		distinct = [];

	fill([], 0);
	for (var i = 0; i < results.length; i++) {
		var hash = arrHash(results[i]);
		if (!resHash[hash]) {
			distinct.push(results[i]);
			resHash[hash] = true;
		} 
	}

	return distinct;

	function fill(curRes, fromIdx) {
		var curArr = curRes.concat([]),
			sum = arrSum(curArr);

		for (var i = fromIdx; i < candidates.length; i++) {
			if (sum + candidates[i] === target) {
				return results.push(curArr.concat([candidates[i]]));
			} else if (sum + candidates[i] < target) {
				fill(curArr.concat([candidates[i]]), i + 1);
			} else {
				return;
			}
		}
	}

	function arrSum(arr) {
		return arr.reduce(function(prev, cur){
			return prev + cur;
		}, 0);
	}

	function arrHash(arr) {
		return arr.reduce(function (prev, next){
			return prev + next;
		}, '');
	}
};