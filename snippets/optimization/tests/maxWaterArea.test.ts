import maxWaterArea from '../maxWaterArea';

describe('Container With Most Water', () => {
  test('Example 1: [1,8,6,2,5,4,8,3,7] should return 49', () => {
    expect(maxWaterArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('Example 2: [1,1] should return 1', () => {
    expect(maxWaterArea([1, 1])).toBe(1);
  });

  test('Increasing heights: [1,2,3,4,5] should return 6', () => {
    expect(maxWaterArea([1, 2, 3, 4, 5])).toBe(6);
  });

  test('Decreasing heights: [5,4,3,2,1] should return 6', () => {
    expect(maxWaterArea([5, 4, 3, 2, 1])).toBe(6);
  });

  test('Same heights: [5,5,5,5,5] should return 20', () => {
    expect(maxWaterArea([5, 5, 5, 5, 5])).toBe(20);
  });

  test('Single peak in middle: [1,2,10,2,1] should return 4', () => {
    expect(maxWaterArea([1, 2, 10, 2, 1])).toBe(4);
  });

  test('Two peaks at ends: [9,1,1,1,9] should return 36', () => {
    expect(maxWaterArea([9, 1, 1, 1, 9])).toBe(36);
  });

  test('Large array with random heights', () => {
    const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));
    expect(typeof maxWaterArea(largeArray)).toBe('number');
  });

  test('Zero heights: [0,0,0,0] should return 0', () => {
    expect(maxWaterArea([0, 0, 0, 0])).toBe(0);
  });

  test('Edge case: max integer heights', () => {
    const maxHeight = 10000; // Per the constraints
    expect(maxWaterArea([maxHeight, 0, maxHeight])).toBe(maxHeight * 2);
  });

  test('Performance test for large arrays', () => {
    // Create an array with the maximum size allowed by the problem constraints
    const largeArray = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 10000));

    const startTime = process.hrtime.bigint();
    maxWaterArea(largeArray);
    const endTime = process.hrtime.bigint();

    // Convert from nanoseconds to milliseconds
    const duration = Number(endTime - startTime) / 1000000;

    // This is a subjective threshold - you might need to adjust based on your environment
    expect(duration).toBeLessThan(1000); // Should complete in under 1 second
  });
});
