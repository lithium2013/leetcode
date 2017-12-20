/**
 * @param {number[]} cost
 * @return {number}
 */
// P[i+2] = min{ P[i+1]+cost[i+1], P[i]+cost[i] }
var minCostClimbingStairs = function(cost) {
	if (!cost.length) return 0;
	if (cost.length <= 2) return Math.min.apply(null, cost);

	var store = [0, 0];

	// i + 1 < cost.length
<<<<<<< HEAD
	for (var i = 0; i < cost.length - 1; i++) {
		store[i + 2] = Math.min(
			store[i + 1] + cost[i + 1],
			store[i] + cost[i]
		);
	}

	return store[cost.length];
=======
	for (var i = 0; i < cost.length - 1)
>>>>>>> b7ecc1a8308a20802a9095ac439a89f50e14d23f
};