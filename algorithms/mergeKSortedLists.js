/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
	console.log(ListNode);
	if (!lists.length) {
		return null;
	}

	return merge(lists);

	function merge(lists) {
		if (lists.length === 1) return lists[0];

		var left = merge(lists.slice(0, Math.floor(lists.length / 2))),
			right = merge(lists.slice(Math.floor(lists.length / 2), lists.length));

		return merge2(left, right);
	}

	function merge2(l1, l2) {
		if (!l1 ) return l2;
		if (!l2 ) return l1;

		var result = null;
		while()
		

		return result;
	}
};