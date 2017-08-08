/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var carry = 0,
        res = [],
        flag = res;
    
    while(l1 || l2) {
        res.push( adder(l1, l2) );
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    if (carry) res.push(carry);
    
    return res;
    
    function adder(n1, n2) {
        var add1 = n1 ? n1.val : 0,
            add2 = n2 ? n2.val : 0;
        
        var sum = add1 + add2 + carry;
        if (sum > 9) {
            carry = 1;
            return sum - 10; 
        }
        carry = 0;
        return sum;
    }
};