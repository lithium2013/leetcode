/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	var map = {},
		res = [];

	for (var i = 0; i < strs.length; i++) {
		var str = strs[i],
			hash = getHash(str);
		if (map[hash] === undefined) {
			res.push([str]);
			map[hash] = res.length - 1;
		} else {
			res[map[hash]].push(str);
		}
	}

	return res;

	function getHash(str) {
		return str.split('').sort().join('');
	}
};