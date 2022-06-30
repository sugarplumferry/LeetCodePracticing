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
var reverseList = function (head) {
	let pre = null;
	while (head != null) {
		let next = head.next;
		head.next = pre;
		pre = head;
		head = next;
	}
	return pre;
};

const list = GenerateLinkedList([1, 2, 3, 4, 5]);
console.log(reverseList(list));
