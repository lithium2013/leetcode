/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];

    recur2(0, []);

    return result;

    function recur2(curIdx, selectedIdx) {
        var newSel = selectedIdx.concat([]);

        if (newSel.length === n) return pushPos(newSel);
        if ( n - curIdx + newSel.length === 0) {
            newSel.push(curIdx++);
            return recur2(curIdx, newSel);
        }

        recur2(curIdx + 1, selectedIdx.concat([]));
        recur2(curIdx + 1, newSel.concat([curIdx]));
        return;
    }

    function pushPos(pos) {
        pushIfValid(position2Str(pos));
    }
    
    function position2Str(selectedPos) {
        var str = [];
        for (var j = 0; j < n * 2; ++j) str.push('(');
        for (var i = 0; i < selectedPos.length; i++) str[selectedPos[i]] = ')'; 

        return str;
    }

    function pushIfValid(str) {
        var stack = [];

        for (var i = 0; i < str.length; ++i) {
            if (str[i] === '(') {
                stack.push(str[i]);
            } else {
                if (!stack.length || stack.pop() === ')') return;
            }
        }

        if (!stack.length) result.push(str.join(''));
    }
};