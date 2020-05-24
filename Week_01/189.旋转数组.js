/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 *
 * https://leetcode-cn.com/problems/rotate-array/description/
 *
 * algorithms
 * Easy (40.86%)
 * Likes:    570
 * Dislikes: 0
 * Total Accepted:    125.9K
 * Total Submissions: 303.3K
 * Testcase Example:  '[1,2,3,4,5,6,7]\n3'
 *
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * 
 * 示例 1:
 * 
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 * 
 * 
 * 示例 2:
 * 
 * 输入: [-1,-100,3,99] 和 k = 2
 * 输出: [3,99,-1,-100]
 * 解释: 
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 * 
 * 说明:
 * 
 * 
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 要求使用空间复杂度为 O(1) 的 原地 算法。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 暴力法
// 空间复杂度 => O(1)
// 时间复杂度 => O(n^2)
var rotate = function(nums, k) {

  for (let i = 0; i < k; i++) {
    let previous = nums[nums.length - 1]

    for (let j = 0; j < nums.length; j++) {
      
      let temp = nums[j]
      nums[j] = previous
      previous = temp
    }
  }
}

// 额外数组 
// 空间复杂度 => O(n)
// 时间复杂度 => O(n)
var rotate = function(nums, k) {

  const len = nums.length
  if (k === len) return nums
  
  let temp = []

  for (let i = 0; i < len; i++) {
    temp[(i + k) % len] = nums[i]
  }
  for (let j = 0; j < len; j++) {
    nums[j] = temp[j]
  }

  return nums
}

// 三次反转
// 空间复杂度 => O(1)
// 时间复杂度 => O(n)
var rotate = function(nums, k) {
  k %= nums.length // 除法原理 保证始终在索引内
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1)
}

const reverse = function(nums, start, end) {
  
  while(start < end) {
    let temp = nums[start]
    nums[start] = nums[end]
    nums[end] = temp

    start++;
    end--;
  }
}
// @lc code=end
