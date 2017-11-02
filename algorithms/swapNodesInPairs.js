/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) return null;
    if (!head.next) return head;
    if (!head.next.next || !head.next.next.next) {
        var h1 = head,
            h2 = h1.next,
            h3 = h2.next;
        
        h2.next = h1;
        h1.next = h3;

        return h2;
    }

    var h1 = head,
        h2 = h1.next,
        h3 = h2.next,
        h4 = h3.next;
    
    h2.next = h1;
    h1.next = h3;

    var prefix = h1,
        left = h3,
        right = h4,
        suffix = h4.next; 
        
    while(true) {
        prefix.next = right;
        right.next = left;
        left.next = suffix;

        if (suffix && suffix.next) {
            prefix = left;
            left = suffix;
            right = suffix.next;
            suffix = right.next;
            continue;
        } else {
            break;
        }
    }

    return h2;
    
};