import robHousesInALine from './robHousesInALine';

/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses are arranged in a circle, which means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an array representing the amount of money in each house, return the maximum amount of money you can rob without alerting the police.
 */
export default function robHousesInACircle(houseAmounts: number[]): number {
  if (houseAmounts.length === 0) {
    return 0;
  }

  if (houseAmounts.length === 1) {
    return houseAmounts[0];
  }

  const excludingLast = houseAmounts.slice(0, houseAmounts.length - 1);
  const excludingFirst = houseAmounts.slice(1);
  return Math.max(robHousesInALine(excludingLast), robHousesInALine(excludingFirst));
}
