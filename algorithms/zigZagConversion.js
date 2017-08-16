/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (!s.length || numRows <= 1) return s;
    var sArray = s.split(''),
        nr = numRows,
        period = nr * 2 - 2,
        colsPerPeriod = nr - 1,
        res = [];
    
    for(var i = 0; i < sArray.length; i++) {
        var quotient = Math.floor(i / period),
            mod = i % period,
            row = mod < nr ? mod : period - mod,
            col = mod < nr ? quotient * colsPerPeriod : quotient * colsPerPeriod + (mod - nr + 1);
        
        res[i] = {
            row: row,
            col: col,
            val: sArray[i]
        };
    }

    return res
        .sort(function(x, y) {
            if (x.row === y.row) {
              return x.col < y.col ? -1 : 1;
            }
            return x.row < y.row ? -1 : 1;
        })
        .map(function(item) {
            return item.val
        })
        .join('');
};