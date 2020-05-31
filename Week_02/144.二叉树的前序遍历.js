/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (64.75%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    108.9K
 * Total Submissions: 165.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
 * 
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
// 空间复杂度 => O(n)

var preorderTraversal = function(root) {
  const result = []

  __traversal(root, result)

  return result
};

function __traversal(root, result) {
  if (!root) return;

  result.push(root.val)

  if (root.left) {
    __traversal(root.left, result)
  }
  if (root.right) {
    __traversal(root.right, result)
  }

}

// 迭代法
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)

var preorderTraversal = function(root) {
  const result = []
  const stack = []

  if (!root) return result
  
  stack.push(root)

  while(stack.length) {
    
    const root = stack.pop()
    result.push(root.val)

    if (root.right) {
      stack.push(root.right)
    }

    if (root.left) {
      stack.push(root.left)
    }
   
  }

  return result
}

// @lc code=end

