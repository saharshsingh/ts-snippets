import productExceptSelf from '../productExceptSelf';

describe('productExceptSelf', () => {
  test('leetcode example 1', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  test('leetcode example 2', () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });
});
