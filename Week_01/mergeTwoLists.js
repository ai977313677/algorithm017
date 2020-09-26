/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 || !l2) { return l1 ? l1 : l2; }
    let head;
    if (l1.val > l2.val) {
        head = l2; l2 = l2.next;
    } else {
        head = l1; l1 = l1.next;
    }

    let cur = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    const rest = l1 ? l1 : l2;
    cur.next = rest;
    return head;
};