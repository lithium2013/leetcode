/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length <= 1) return s;

    var sArray = s.split(''),
        arr = [1];
    
    for (var index = 1; index < sArray.length; index ++) {
        var preLen = arr[index - 1],
            preChr = sArray[index - 1],
            chr = sArray[index],
            lastPalindromeStartIdx = index - preLen;
        
        if(lastPalindromeStartIdx > 0 && sArray[lastPalindromeStartIdx - 1] === chr) {
            arr[index] = preLen + 2;
        }else {
            for (var idx = lastPalindromeStartIdx; idx < index; idx++) {
                if (isPalindromic(sArray.slice(idx, index + 1))) {
                    arr[index] = preLen - (idx - lastPalindromeStartIdx) + 1;
                    break;
                }
            }
            arr[index] = arr[index] || 1;
        }
    }

    var max = 1, mIdx = 0;
    for (var i = 0; i < arr.length; i ++) {
        if (arr[i] > max) {
            max = arr[i];
            mIdx = i;
         }
    }
    return sArray.slice(mIdx - max + 1, mIdx + 1).join('');

    function isPalindromic(array) {
        return array.join('') === array.reverse().join('');
    }
};