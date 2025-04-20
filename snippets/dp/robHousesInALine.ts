/**
 * You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. Houses are arranged in a line. Adjacent houses have security systems connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
 *
 * Given an array representing the amount of money in each house, return the maximum amount of money you can rob without alerting the police.
 */
const robHousesInALine = robHousesInALineIteratively;
export default robHousesInALine;

export function robHousesInALineIteratively(houseAmounts: number[]): number {
  const n = houseAmounts.length;
  if (n === 0) {
    return 0;
  }

  const dp = new Array<number>(n);
  for (let i = n - 1; i >= 0; i--) {
    const ifIncluded = houseAmounts[i] + (i + 2 < n ? dp[i + 2] : 0);
    const ifSkipped = i + 1 < n ? dp[i + 1] : 0;
    dp[i] = Math.max(ifIncluded, ifSkipped);
  }
  return dp[0];
}

export function robHousesInALineRecursively(houseAmounts: number[]): number {
  return robHousesInALineWithMemo(houseAmounts);
}

function robHousesInALineWithMemo(
  houseAmounts: number[],
  start: number = 0,
  memo: Record<number, number> = {}
): number {
  if (memo[start] !== undefined) {
    return memo[start];
  }

  if (start >= houseAmounts.length) {
    return 0;
  }

  const robberyIncludingStart =
    houseAmounts[start] + robHousesInALineWithMemo(houseAmounts, start + 2, memo);
  const robberySkippingStart = robHousesInALineWithMemo(houseAmounts, start + 1, memo);
  const robbery = Math.max(robberyIncludingStart, robberySkippingStart);
  memo[start] = robbery;
  return robbery;
}
