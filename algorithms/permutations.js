/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	if (!nums || !nums.length) return [];
	
	var permutes = [],
		set = new Set(nums);	

	pickOne([], set);

	return permutes;

	function pickOne(curPermute, set) {
		if (!set.size) {
			permutes.push(curPermute);
			return;
		} 

		var newSet;

		for( var item of set) {
			newSet = new Set(set);	
			newSet.delete(item);
			pickOne(curPermute.concat([item]), newSet);
		}		
	}
};