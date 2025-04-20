import robHousesInACircle from '../robHousesInACircle';

describe('House Robber II', () => {
  test('Example 1', () => {
    expect(robHousesInACircle([2, 3, 2])).toBe(3);
  });

  test('Example 2', () => {
    expect(robHousesInACircle([1, 2, 3, 1])).toBe(4);
  });

  test('Single house', () => {
    expect(robHousesInACircle([5])).toBe(5);
  });

  test('Two houses', () => {
    expect(robHousesInACircle([1, 2])).toBe(2);
  });

  test('Three houses with equal values', () => {
    expect(robHousesInACircle([10, 10, 10])).toBe(10);
  });

  test('Larger example', () => {
    expect(robHousesInACircle([1, 3, 1, 3, 100])).toBe(103);
  });

  test('Zero values', () => {
    expect(robHousesInACircle([0, 0, 0, 0])).toBe(0);
  });

  test('Empty array', () => {
    expect(robHousesInACircle([])).toBe(0);
  });
});
