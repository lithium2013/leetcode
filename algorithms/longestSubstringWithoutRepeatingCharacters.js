/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var sArray = s.split(''),
        arr = [1];

    if (!s.length) return 0;

    for(var idx = 1; idx < sArray.length; idx ++) {
        var prefix = sArray.slice(idx - arr[idx - 1], idx),
            chr = sArray[idx],
            result = null;

        for(var index = 0; index < prefix.length; index ++) {
            if (prefix[prefix.length - 1 - index] === chr) {
                result = index + 1;
                break;
            }
        }
        arr[idx] = result || arr[idx - 1] + 1;
    }

    return Math.max.apply(null, arr);
};
