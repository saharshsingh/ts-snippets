import trapRainWater from '../trapRainWater';

describe('trapRainWater', () => {
  test('leetcode example 1', () => {
    expect(trapRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toEqual(6);
  });

  test('leetcode example 2', () => {
    expect(trapRainWater([4, 2, 0, 3, 2, 5])).toEqual(9);
  });
});
