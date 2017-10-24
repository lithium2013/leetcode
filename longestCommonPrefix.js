/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var len = Infinity,
		prefix = '';
	if (!strs || !strs.length) return '';
	
	for (var i = 0; i < strs.length; ++i) {
		if (strs[i].length < len) {
			len = strs[i].length;
			prefix = strs[i];
		}
	}

	var flag = len;
	while(flag--) {
		for (i = 0; i < strs.length; ++i) {
			if (strs[i][flag] !== prefix[flag]) {
				len = flag;
			}
		}
	}

	return prefix.slice(0, len);

};