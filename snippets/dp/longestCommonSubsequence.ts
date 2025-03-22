/**
 * Find longest common subsequence between two string values. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
 *
 * @param first
 * @param second
 * @returns length of the longest subsequence
 */
const longestCommonSubsequence = longestCommonSubsequenceIteratively;
export default longestCommonSubsequence;

export function longestCommonSubsequenceIteratively(first: string, second: string): number {
  const firstL = first.length;
  const secondL = second.length;

  const dp: number[][] = Array.from({ length: firstL + 1 }, () =>
    new Array<number>(secondL + 1).fill(0)
  );

  for (let i = 1; i <= firstL; i++) {
    for (let j = 1; j <= secondL; j++) {
      if (first.charAt(i - 1) === second.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        continue;
      }

      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }

  return dp[firstL][secondL];
}

export function longestCommonSubsequenceRecursively(first: string, second: string): number {
  return longestCommonSubsequenceUsingMemo(first, second, 0, 0);
}

function longestCommonSubsequenceUsingMemo(
  first: string,
  second: string,
  f: number,
  s: number,
  memo: Record<string, number> = {}
): number {
  if (f >= first.length || s >= second.length) {
    return 0;
  }
  const memoKey = `${f}-${s}`;

  if (memo[memoKey] !== undefined) {
    return memo[memoKey];
  }

  if (first.charAt(f) === second.charAt(s)) {
    const result = 1 + longestCommonSubsequenceUsingMemo(first, second, f + 1, s + 1, memo);
    memo[memoKey] = result;
    return result;
  }

  const withoutFirst = longestCommonSubsequenceUsingMemo(first, second, f + 1, s, memo);
  const withoutSecond = longestCommonSubsequenceUsingMemo(first, second, f, s + 1, memo);
  const result = Math.max(withoutFirst, withoutSecond);
  memo[memoKey] = result;
  return result;
}
