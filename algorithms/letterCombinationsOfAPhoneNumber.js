/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var mapping = [
        [' '],
        [''],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z'],
    ],
    result = [''];

    for (var i = 0; i < digits.length; i++) {
        result = combinationsAppend(result, digits[i]);
    }

    return result;

    function combinationsAppend(combinations, digit) {
        var num = parseInt(digit),
            chrs = mapping[num],
            res = [];
        
        for (var i = 0; i < combinations.length; i++) {
            for (var j = 0; j < chrs.length; j++) {
                res.push(combinations[i] + chrs[j]);
            }
        }
        return res;
    }
    
};