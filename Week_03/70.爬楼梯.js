/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (48.10%)
 * Likes:    1007
 * Dislikes: 0
 * Total Accepted:    196.7K
 * Total Submissions: 403.7K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */

// n = 1 => 1 
// n = 2 => 2
// n = 3 => 1,1,1 | 1,2 | 2,1 => 1 + f(2) | 2 + f(1)
// n = 4 => 1,1,1,1 | 1,1,2 | 1,2,1 | 2,1,1 | 2,2 => 1 + f(3) | 2 + f(2)
// n = 5 => 1 + f(4) | 2 + f(3)
// n = 6 => 1 + f(5) | 2 + f(4)
// n = n => f(n-2) + f(n-1)

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 暴力法 傻递归
// 时间复杂度 => O(2^n) 树型递归的大小为2^n
// 空间复杂度 => O(n)   树型递归深度为n
var climbStairs = function(n) {
  if (n == 1 || n == 2) return n
  
  return climbStairs(n-1) + climbStairs(n-2)
};

// 缓存结果
// 时间复杂度 => O(n) 剪枝后的树型递归大小为n, 
// 空间复杂度 => O(n) 树型递归深度为n
var climbStairs = function(n) {
  const memo = new Array(n+1)

  return __climbStairs(n, memo)
}

function __climbStairs(n, memo) {
  if (n == 1 || n == 2) return n
  
  memo[n] = memo[n] || (climbStairs(n-1) + climbStairs(n-2))
  return memo[n]
}

// 动态规划
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)
var climbStairs = function(n) {
  if (n === 1 || n === 2) return n

  const dp = new Array(n+1);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

// 斐波那契数
// 时间复杂度 => O(n)
// 空间复杂度 => O(n)
//  1, 1, 2, 3, 5, 8, 13
var climbStairs = function(n) {
  if (n == 1) return 1

  let first = 1;
  let second = 2;

  for (let i = 3; i <= n; i++) {
    
    let third = first + second
    first = second
    second = third
  }

  return second
}
// @lc code=end

