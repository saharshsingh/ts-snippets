import {
  minNumberOfCoinsUsingIteration,
  minNumberOfCoinsUsingRecursion,
} from '../minNumberOfCoins';

describe.each([
  ['(iteratively)', minNumberOfCoinsUsingIteration],
  ['(recursively)', minNumberOfCoinsUsingRecursion],
])('Coin Change - Minimum Number of Coins (%s)', (_, minNumberOfCoins) => {
  it('should return the minimum number of coins for standard case', () => {
    expect(minNumberOfCoins([1, 2, 5], 11)).toEqual(3);
  });

  it('should return 1 when there is an exact denomination available', () => {
    expect(minNumberOfCoins([1, 2, 5], 5)).toEqual(1);
  });

  it('should handle cases where greedy approach would fail', () => {
    expect(minNumberOfCoins([1, 3, 4], 6)).toEqual(2); // 3+3 is better than 4+1+1
  });

  it('should return -1 for impossible amounts', () => {
    expect(minNumberOfCoins([2, 5, 10], 3)).toEqual(-1);
  });

  it('should return 0 for zero amount', () => {
    expect(minNumberOfCoins([1, 2, 5], 0)).toEqual(0);
  });

  it('should return -1 when single coin denomination cannot make the amount', () => {
    expect(minNumberOfCoins([2], 11)).toEqual(-1);
  });

  it('should work with single coin that divides the amount evenly', () => {
    expect(minNumberOfCoins([7], 14)).toEqual(2);
  });

  it('should handle larger numbers correctly', () => {
    expect(minNumberOfCoins([1, 9, 10], 18)).toEqual(2);
  });

  it('should return the minimum count when multiple solutions exist', () => {
    expect(minNumberOfCoins([1, 2, 5], 10)).toEqual(2); // 5+5 is better than 5+2+2+1
  });

  it('should handle empty coins array', () => {
    expect(minNumberOfCoins([], 5)).toEqual(-1);
  });

  it('should handle very large amounts', () => {
    expect(minNumberOfCoins([1, 2, 5], 100)).toEqual(20); // 20 coins of 5
  });

  it('should handle coins with duplicate denominations', () => {
    expect(minNumberOfCoins([1, 2, 2, 5], 11)).toEqual(3); // Same as [1, 2, 5]
  });
});
