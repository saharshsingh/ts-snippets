import { robHousesInALineRecursively, robHousesInALineIteratively } from '../robHousesInALine';

describe.each([
  ['Recursively', robHousesInALineRecursively],
  ['Iteratively', robHousesInALineIteratively],
])('Rob Houses In a Line %s', (_, robHousesInALine) => {
  test('returns 0 for empty array', () => {
    expect(robHousesInALine([])).toBe(0);
  });

  test('returns the only value for single house', () => {
    expect(robHousesInALine([5])).toBe(5);
    expect(robHousesInALine([0])).toBe(0);
    expect(robHousesInALine([100])).toBe(100);
  });

  test('returns max value for two houses', () => {
    expect(robHousesInALine([1, 2])).toBe(2);
    expect(robHousesInALine([5, 3])).toBe(5);
    expect(robHousesInALine([10, 11])).toBe(11);
  });

  test('handles simple cases', () => {
    expect(robHousesInALine([1, 2, 3])).toBe(4); // Take houses 1 and 3 (indices 0 and 2)
    expect(robHousesInALine([2, 7, 9, 3, 1])).toBe(12); // Take houses 2 and 9 (indices 0 and 2)
    expect(robHousesInALine([5, 1, 1, 5])).toBe(10); // Take houses 5 and 5 (indices 0 and 3)
  });

  test('handles non-obvious patterns', () => {
    expect(robHousesInALine([2, 1, 1, 2])).toBe(4); // Take houses 2 and 2 (indices 0 and 3)
    expect(robHousesInALine([1, 3, 1, 3, 1])).toBe(6); // Take houses 3, 3 (indices 1 and 3)
    expect(robHousesInALine([4, 1, 2, 7, 5, 3, 1])).toBe(14); // Take houses 4, 7, 3 (indices 0, 3, 5)
  });

  test('handles alternating pattern optimally', () => {
    expect(robHousesInALine([10, 1, 10, 1, 10])).toBe(30); // Take all houses with value 10
  });

  test('handles all zeros', () => {
    expect(robHousesInALine([0, 0, 0, 0])).toBe(0);
  });

  test('handles all negatives - chooses optimally to avoid robbery', () => {
    // Assuming we can skip all houses if that's more profitable
    expect(robHousesInALine([-1, -2, -3])).toBe(0);
  });

  test('handles large house arrays', () => {
    const houses = Array(100)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? 10 : 1));
    expect(robHousesInALine(houses)).toBe(500); // Take all even-indexed houses (50 houses * 10 value)
  });
});
