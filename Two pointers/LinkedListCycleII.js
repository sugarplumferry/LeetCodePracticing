function ListNode(val) {
	this.val = val;
	this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

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

var detectCycleByHash = function (head) {
	const hashSet = new Set();
	while (head) {
		if (hashSet.has(head)) return head;
		else hashSet.add(head);
        head = head.next;
	}
	return null;
};

var detectCycleByTwoPointer = function (head) {
	let fast = head;
	let slow = head;
	while(fast && fast.next){
		fast = fast.next.next;
		slow = slow.next;
		if(fast === slow){
			let asSlow = head;
			while(asSlow !== slow){
				asSlow = asSlow.next;
				slow = slow.next;
			}
			return slow;
		}
	}
	return null;
};

let list = GenerateLinkedList([3,2,0,4]); // 2
list.next.next.next.next = list.next;
console.log("hash:" + detectCycleByHash(list).val);
console.log("two pointer:" + detectCycleByTwoPointer(list).val);
list = GenerateLinkedList([1,2]);         // 1
list.next = list;
console.log("hash:" + detectCycleByHash(list).val);
console.log("two pointer:" + detectCycleByTwoPointer(list).val);
