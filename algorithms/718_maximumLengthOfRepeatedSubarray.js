/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
	if (!A.length || !B.length) return 0;

	let max = -Infinity;
	const dp = [];

	for (var i = 0; i < A.length; i++) {
		dp[i] = [];
		for (var j = 0; j < B.length; j++) {
			if (i === 0 || j === 0) {
				dp[i][j] = A[i] === B[j] ? 1 : 0;
				max = Math.max(dp[i][j], max);
			} else {
				if (A[i] === B[j]) {
					dp[i][j] = (dp[i-1][j-1] || 0) + 1;
					max = Math.max(dp[i][j], max);
				}
			}
		}
	}	

	return max;
};
