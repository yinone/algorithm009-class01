/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (70.70%)
 * Likes:    303
 * Dislikes: 0
 * Total Accepted:    80.4K
 * Total Submissions: 112.6K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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
// 时间复杂度 => O(n)
// 空间复杂度 => 0(n) 
var postorderTraversal = function(root) {
  const result = []

  __traversal(root, result)

  return result
};

function __traversal(root, result) {
  if (!root) return

  if (root.left) {
    __traversal(root.left, result)
  }

  if (root.right) {
    __traversal(root.right, result)
  }
  
  result.push(root.val)
}

// 迭代法
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)
var postorderTraversal = function(root) {

  const result = []
  const stack = []

  if (!root) return result

  stack.push(root)

  while (stack.length) {
    
    root = stack.pop()
    result.unshift(root.val)

    if (root.left) {
      stack.push(root.left)
    }

    if (root.right) {
      stack.push(root.right)
    }
  }

  return result
}
// @lc code=end

