/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/description/
 *
 * algorithms
 * Easy (72.63%)
 * Likes:    71
 * Dislikes: 0
 * Total Accepted:    23.8K
 * Total Submissions: 32.3K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的后序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其后序遍历: [5,6,3,2,4,1].
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */

// 递归法
// 时间复杂度 => O(n)
// 孔贾复杂度 => O(n)
var postorder = function(root) {
  const result = []

  __postorder(root, result)
  return result
};

function __postorder(root, result) {
  if (!root) return

  if (root.children && root.children.length) {

    for (let i = 0; i < root.children.length; i++) {
      __postorder(root.children[i], result);
    }
  }

  result.push(root.val)
}

// 迭代法
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)
var postorder = function(root) {

  const result = []
  const stack = []

  if (!root) return result

  stack.push(root)

  while(stack.length) {
    root = stack.pop()
    result.unshift(root.val)

    if (root.children && root.children.length) {
      for (let i = 0; i < root.children.length; i++) {
        stack.push(root.children[i]);
      }
    }
  }

  return result
}
// @lc code=end

