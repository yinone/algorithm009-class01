/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  if (!nums.length) throw new Error('No Solution')
  const map = {}

  for (let i = 0; i < nums.length; i++) {
    const index = map[target - nums[i]]

    if (index > -1) {
      return [index, i]
    }

    map[nums[i]] = i
  }

  throw new Error('No Solution')
};
// @lc code=end

