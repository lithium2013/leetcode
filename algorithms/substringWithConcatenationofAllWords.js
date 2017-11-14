/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
	if (!s || !s.length || !words || !words.length) return [];

	var wordMap = {},
		strMap = [];
		sl = s.length,
		wl1 = words[0].length,
		wl2 = words.length;
		wl = wl1 * wl2,
		res = [];
	
	if (sl < wl) return [];

	for (var i = 0; i < wl2; ++i) {
		wordMap[words[i]] ? wordMap[words[i]]++ : wordMap[words[i]] = 1;
	}

	for (i = 0; i <= sl - wl1; i++) {
		var curWord = s.slice(i, i + wl1);

		if (wordMap[curWord]) {
			strMap[i] = curWord;
		}
	}

	for (var j = 0; j < wl1; j++) {
		for (var k = j; k <= sl - wl; k += wl1) {
			if (isValid(k)) res.push(k);
		}
	}

	return res;

	function isValid(idx) {
		if (idx + wl > sl) return false;
		var curMap = {};

		for (var i = idx; i < idx + wl; i += wl1) {
			var curWord = strMap[i];

			if (!curWord) return false;

			curMap[curWord] ? curMap[curWord]++ : curMap[curWord] = 1;
		}


		for (var j = 0; j < wl2; j++) {
			if (wordMap[words[j]] !== curMap[words[j]]) return false;
		}

		return true;
	}
};
