function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
	let head = new ListNode();
	let result = head;
	while (list1 && list2) {
		if (list1.val >= list2.val) {
			head.next = list2;
			list2 = list2.next;
		} else {
			head.next = list1;
			list1 = list1.next;
		}

		head = head.next;
	}
	head.next = list1 || list2;

	return result.next;
};

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

let list1 = GenerateLinkedList([1, 2, 4]),
	list2 = GenerateLinkedList([1, 3, 4]);

console.log(mergeTwoLists(list1, list2));
