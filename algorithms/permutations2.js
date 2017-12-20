/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
	var res = [];
	if (!nums || !nums.length) return res;
	dfs([], nums);
	return res;

	function dfs(curPermute, restNums) {
		if (!restNums.length) {
			res.push(curPermute);
			return;
		}

		var usedMap = {};
		for (var i = 0; i < restNums.length; i++) {
			var item = restNums[i];
			if (usedMap[item]) continue;			
			var nextNums = restNums.slice(0, i).concat(restNums.slice(i + 1, restNums.length));
			usedMap[item] = true;

			dfs(curPermute.concat([item]), nextNums);
		}
	}
};