/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 *
 * https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (65.07%)
 * Likes:    84
 * Dislikes: 0
 * Total Accepted:    20.7K
 * Total Submissions: 31.6K
 * Testcase Example:  '[1,null,3,2,4,null,5,6]'
 *
 * 给定一个 N 叉树，返回其节点值的层序遍历。 (即从左到右，逐层遍历)。
 * 
 * 例如，给定一个 3叉树 :
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 返回其层序遍历:
 * 
 * [
 * ⁠    [1],
 * ⁠    [3,2,4],
 * ⁠    [5,6]
 * ]
 * 
 * 
 * 
 * 
 * 说明:
 * 
 * 
 * 树的深度不会超过 1000。
 * 树的节点总数不会超过 5000。
 * 
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
 * @return {number[][]}
 */
// 广度优先搜索
// 空间复杂度 => O(n)
// 时间复杂度 => O(n)

var levelOrder = function(root) {
  const result = []

  if (!root) return result

  const queue = []
  queue.push(root)

  while (queue.length) {

    const levelItems = []
    let levelSize = queue.length

    while (levelSize--) {
      const node = queue.shift()

      levelItems.push(node.val)

      if (node.children.length) {
        queue.push(...node.children)
      }

    }

    result.push(levelItems)
  }

  return result
}
// @lc code=end

