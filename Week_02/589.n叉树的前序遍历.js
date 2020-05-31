/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 *
 * algorithms
 * Easy (72.53%)
 * Likes:    78
 * Dislikes: 0
 * Total Accepted:    27.8K
 * Total Submissions: 38K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的前序遍历。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其前序遍历: [1,3,5,6,2,4]。
 * 
 * 
 * 
 * 说明: 递归法很简单，你可以使用迭代法完成此题吗?
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
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
// 空间复杂度 => O(n)

var preorder = function(root) {
  const result = []

  __preorder(root, result)

  return result
};

function __preorder(root, result) {
  if (!root) return

  result.push(root.val)

  if (root.children && root.children.length) {
    for (let i = 0; i < root.children.length; i++) {
      __preorder(root.children[i], result)
    }
  }
  
}

// 迭代法
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)
var preorder = function(root) {
  const stack = []
  const result = []

  if (!root) return result

  stack.push(root)

  while(stack.length) {

    root = stack.pop()

    if (root) {
      result.push(root.val)
    }
    
    if (root.children && root.children.length) {
      for (let i = root.children.length - 1; i > -1; i--) {
        stack.push(root.children[i])
      }
    }
  }

  return result
}
// @lc code=end

