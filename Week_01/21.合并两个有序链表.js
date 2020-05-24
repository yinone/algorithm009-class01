/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (60.52%)
 * Likes:    1058
 * Dislikes: 0
 * Total Accepted:    272.6K
 * Total Submissions: 436.2K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * 示例：
 * 
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * 
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归法
// 时间复杂度 => O(m+n)
// 空间复杂度 => O(m+n)
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next,l2)
    return l1
  }

  l2.next = mergeTwoLists(l2.next, l1)
  return l2
};

// 迭代法
// 时间复杂度 => O(m+n)
// 空间复杂度 => O(1) 只需要一个哨兵节点
var mergeTwoLists = function(l1, l2) {
  let prevHead = new ListNode(null)
  let prev = prevHead
  
  while (l1 !== null && l2 !== null) {

    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }

    prev = prev.next
  }

  prev.next = l1 === null ? l2 : l1
  return prevHead.next
}
// @lc code=end

