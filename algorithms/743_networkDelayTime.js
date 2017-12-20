/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
	var unknown = {},
		known = {}, 
		timeMap = [];
		remain = N - 1;
	
	if (!remain) return 0;
	known[K] = 0;

	for (var i = 0; i < times.length; i++) {
		var src = times[i][0],
			dst = times[i][1],
			val = times[i][2];

		if (!timeMap[src]) timeMap[src] = [];
		timeMap[src][dst] = val;
	}

	for (var i = 1; i <= N; i++) {
		if (i === K) continue;

		val = getTimeMap(K, i);
		val = val === null ? Infinity : val;
		unknown[i] = val;
	}

	while(remain--) {
		var min = Infinity,
			idx;	

		for (var i in unknown) {
			if (unknown[i] < min) {
				min = unknown[i];
				idx = i;
			}
		}

		if (min === Infinity) return -1;

		known[idx] = min;
		delete unknown[idx];
		for (i in unknown) {
			if (
				getTimeMap(idx, i) !== null &&
				timeMap[idx][i] + known[idx] < unknown[i]
			) {
				unknown[i] = timeMap[idx][i] + known[idx];
			}
		}
	}

	var max = -Infinity;
	for (var i in known) {
		if (known[i] > max) max = known[i];
	} 
	
	return max;

	function getTimeMap(src, dst) {
		if (timeMap[src] && typeof timeMap[src][dst] === 'number') return timeMap[src][dst];

		return null;
	}
};