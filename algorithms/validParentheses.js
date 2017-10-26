/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var lSet = {
        '(': ')',
        '{': '}',
        '[': ']'
    },
    stack = [];
    
    for (var i = 0; i < s.length; ++i) {
        if (lSet[s[i]]) {
            stack.push(s[i]);
        } else {
            if(!stack.length) return false;
            if (lSet[stack.pop()] !== s[i]) return false;
        }
    }

    return !stack.length;
};