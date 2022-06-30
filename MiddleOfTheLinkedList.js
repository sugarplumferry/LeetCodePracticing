function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

function GenerateLinkedList(array) {
	let list = new ListNode();
	let head = list;
	for (let i = 0; i < array.length; i++) {
		list.val = array[i];
		if (i != array.length - 1) {
			list.next = new ListNode();
			list = list.next;
		}
	}
	return head;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
	let fast = new ListNode(0, head);
	let slow = new ListNode(0, head);
	while (fast.next && fast.next.next) {
		fast = fast.next.next;
		slow = slow.next;
	}
	return slow.next;
};

console.log(middleNode(GenerateLinkedList([1, 2, 3, 4, 5, 6])));
console.log(middleNode(GenerateLinkedList([1, 2, 3, 4, 5])));
