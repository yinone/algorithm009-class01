/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (73.66%)
 * Likes:    1058
 * Dislikes: 0
 * Total Accepted:    132K
 * Total Submissions: 175K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 深度优先遍历
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)
var generateParenthesis = function(n) {
  const result = []
  
  if (n === 0) return result

  dfs('', n, n, result)

  return result
};

var dfs = function(curStr, left, right, result) {
  // terminator
  if (left === 0 && right === 0) {

    // process result
    result.push(curStr)

    return
  }

  // process current login & drill down
  if (left > 0) {
    dfs(curStr + '(', left - 1, right, result)
  }

  if (left < right) {
    dfs(curStr + ')', left, right - 1, result)
  }
}
// @lc code=end

