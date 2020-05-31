/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (70.66%)
 * Likes:    505
 * Dislikes: 0
 * Total Accepted:    161.8K
 * Total Submissions: 226.3K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归法
// 空间复杂度 => O(n)
// 时间复杂度 => o(n)
var inorderTraversal = function(root) {
  const res = []
  __traversal(root, res)
  return res
};

function __traversal(root, res) {
  if (!root) return

  if (root.left) {
    __traversal(root.left, res)
  }

  res.push(root.val)

  if (root.right) {
    __traversal(root.right, res)
  }
}

// 迭代法
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)
var inorderTraversal = function(root) {
  const stack = []
  const result = []

  if (!root) return result

  while (stack.length || root) {

    if (root) {
      stack.push(root)
      root = root.left
    } else {

      root = stack.pop()

      result.push(root.val)
      root = root.right
      
    }

  }

  return result
}



// @lc code=end

