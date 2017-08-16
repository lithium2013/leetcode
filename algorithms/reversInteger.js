/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0;
    var n = x,
        res = 0;
    while(Math.abs(n) > 0) {
        var mod = n % 10;

        n = parseInt(n / 10);
        res = res * 10 + mod;
    }

    if (Math.abs(res) > Math.pow(2, 31) - 1) return 0
    return res;
};