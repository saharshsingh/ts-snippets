/**
 * Find the maximum sum of a contiguous subarray
 */
const maxSubarraySum = maxSubarraySumUsingKadane;
export default maxSubarraySum;

// Kadane

export function maxSubarraySumUsingKadane(nums: number[]): number {
  let currentSum = 0;
  let maxSum = undefined;
  for (const num of nums) {
    currentSum = Math.max(currentSum + num, num);
    maxSum = Math.max(maxSum ?? currentSum, currentSum);
  }
  return maxSum ?? 0;
}

// Top Down Recursion

export function maxSubarraySumRecursively(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }
  return maxSubarraySumWithMemo(nums, 0, nums.length - 1);
}

function maxSubarraySumWithMemo(
  nums: number[],
  start: number,
  end: number,
  memo: Record<string, number> = {}
): number {
  if (start === end) {
    return nums[start];
  }

  const memoKey = `${start}-${end}`;
  if (memo[memoKey] !== undefined) {
    return memo[memoKey];
  }

  let maxSum = sumArrayRange(nums, start, end);
  maxSum = Math.max(maxSum, maxSubarraySumWithMemo(nums, start, end - 1, memo));
  maxSum = Math.max(maxSum, maxSubarraySumWithMemo(nums, start + 1, end, memo));
  memo[memoKey] = maxSum;
  return maxSum;
}

function sumArrayRange(nums: number[], start: number, end: number): number {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += nums[i];
  }
  return sum;
}
