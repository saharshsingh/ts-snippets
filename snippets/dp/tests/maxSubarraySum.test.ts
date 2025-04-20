import { maxSubarraySumUsingKadane, maxSubarraySumRecursively } from '../maxSubarraySum';

describe.each([
  ['Using Kadane Algorithm', maxSubarraySumUsingKadane],
  ['Using Recursion', maxSubarraySumRecursively],
])('Maximum Subarray Sum %s', (_, maxSubarraySum) => {
  test('Example case', () => {
    expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  test('All negative numbers', () => {
    expect(maxSubarraySum([-1, -2, -3, -4])).toBe(-1);
  });

  test('All positive numbers', () => {
    expect(maxSubarraySum([1, 2, 3, 4])).toBe(10);
  });

  test('Single element array', () => {
    expect(maxSubarraySum([5])).toBe(5);
  });

  test('Empty array', () => {
    expect(maxSubarraySum([])).toBe(0);
  });

  test('Mixed values with alternating pattern', () => {
    expect(maxSubarraySum([3, -2, 5, -1, 4, -5])).toBe(9);
  });

  test('Large array', () => {
    const largeArray = Array(1000)
      .fill(0)
      .map((_, i) => (i % 3 === 0 ? -i : i));
    // Expected value would be the maximum sum possible in this pattern
    expect(maxSubarraySum(largeArray)).toBeGreaterThan(0);
  });
});
