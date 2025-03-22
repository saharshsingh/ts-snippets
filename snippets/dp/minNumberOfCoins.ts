/**
 * Finds minimum number of coins to make amount
 *
 * @param coins - list of available coin denominations
 * @param amount
 *
 * @returns minimum number of coins to make amount, or -1 if not possible
 */
const minNumberOfCoins = minNumberOfCoinsUsingIteration;
export default minNumberOfCoins;

export function minNumberOfCoinsUsingIteration(coins: number[], amount: number): number {
  const minByAmounts: number[] = new Array<number>(amount + 1).fill(amount + 1);
  minByAmounts[0] = 0;

  for (let current = 1; current <= amount; current++) {
    for (const coin of coins) {
      if (coin > current) {
        continue;
      }
      minByAmounts[current] = Math.min(1 + minByAmounts[current - coin], minByAmounts[current]);
    }
  }

  return minByAmounts[amount] <= amount ? minByAmounts[amount] : -1;
}

export function minNumberOfCoinsUsingRecursion(coins: number[], amount: number): number {
  return minNumberOfCoinsWithMemo(coins, amount);
}

function minNumberOfCoinsWithMemo(
  coins: number[],
  amount: number,
  memo: Record<number, number> = {}
): number {
  if (amount === 0) {
    return 0;
  }

  if (memo[amount] !== undefined) {
    return memo[amount];
  }

  let min = undefined;
  for (const coin of coins) {
    if (coin > amount) {
      continue;
    }

    const remainingCount = minNumberOfCoinsWithMemo(coins, amount - coin, memo);
    if (remainingCount === -1) {
      continue;
    }

    const count = 1 + remainingCount;
    if (min === undefined || min > count) {
      min = count;
    }
  }

  const count = min ?? -1;
  memo[amount] = count;
  return count;
}
