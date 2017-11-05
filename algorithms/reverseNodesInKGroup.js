/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (k < 2 || !head|| !head.next) return head;

    var i = k,
        flag = head;

    // Test whether list has enough leng
    while(i && flag) {
        flag = flag.next;
        i--;
    }
    if(i) return head;

    var newHead = null,
        cur = head,
        j = k,
        list = head;

    while(j-- && cur) {
        cur = cur.next;

        list.next = newHead;
        newHead = list;
        list = cur;
    }

    head.next = reverseKGroup(cur, k);

    return newHead;
};