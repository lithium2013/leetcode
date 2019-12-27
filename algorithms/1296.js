/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
  if (k === 1) return true
  const sorted = nums.sort((a, b) => a - b)
  const sets = []
  while(sorted.length) {
    const num = sorted.shift()

    if (!sets.length) {
      sets.push([num])
      continue
    }

    let numAdded = false
    for (let i = 0; i < sets.length; i++) {
      const curSet = sets[i]
      const lastSetNum = curSet[curSet.length - 1]
      if (num === lastSetNum + 1 && curSet.length < k) {
        curSet.push(num)
        numAdded = true
        break
      }
    }
    if (!numAdded) {
      sets.push([num])
    }
  }
  return sets.reduce((result, curSet) => result && curSet.length === k, true)
};
