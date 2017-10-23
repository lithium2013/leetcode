/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var start = 0,
        end = height.length - 1,
        max = 0;
   
    while(start !== end) {
        var res = calc(start, end);
        max = max > res ? max : res;
        if (height[start] >= height[end]) {
            end--;
        }else{
            start++;
        }
    }
    function calc(i, j) {
        return Math.min(height[i], height[j]) * (j - i);
    }
    
    return max;
};