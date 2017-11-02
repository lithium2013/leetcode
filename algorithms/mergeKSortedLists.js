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

    var res = merge(lists);
	//print(lists);
	return res;

	function merge(lists) {
		if (lists.length === 1) return lists[0];

		var left = merge(lists.slice(0, Math.floor(lists.length / 2))),
			right = merge(lists.slice(Math.floor(lists.length / 2), lists.length));

		return merge2(left, right);
	}

	function print(node) {
		while(node) {
			node = node.next;
		}
	}
	
	function merge2(l1, l2) {
		if (!l1 ) return l2;
		if (!l2 ) return l1;
	
		var head,
			tail;
	
		while(l1 && l2) {
			if (l1.val < l2.val) {
				appendNodeToResult(l1);
				l1 = l1.next;
			} else {
				appendNodeToResult(l2);
				l2 = l2.next;
			}
		}
	
		if(l1) tail.next = l1;
		if(l2) tail.next = l2;
	
		return head;
	
		function appendNodeToResult(node) {
			head = head ? head : node;
			if (tail) {
				tail.next = node;				
				tail = tail.next;
			} else {
				tail = head;
			} 
		}
	}
};