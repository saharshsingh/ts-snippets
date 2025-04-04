const wordBreak = wordBreakIteratively;
export default wordBreak;

export function wordBreakIteratively(sequence: string, dictionary: string[]): boolean {
  const dictionarySet = new Set(dictionary);
  const dp = new Array<boolean>(sequence.length + 1).fill(false);
  dp[0] = true;

  for (let j = 1; j <= sequence.length; j++) {
    for (let i = j - 1; i >= 0; i--) {
      if (dp[i] && dictionarySet.has(sequence.substring(i, j))) {
        dp[j] = true;
        break;
      }
    }
  }
  return dp[sequence.length];
}

export function wordBreakRecursively(sequence: string, dictionary: string[]): boolean {
  return wordBreakUsingMemo(sequence, new Set(dictionary));
}

function wordBreakUsingMemo(
  sequence: string,
  dictionary: Set<string>,
  memo: Record<string, boolean> = {}
): boolean {
  if (sequence.length === 0) {
    return true;
  }

  if (memo[sequence] !== undefined) {
    return memo[sequence];
  }

  for (let i = 1; i <= sequence.length; i++) {
    const left = sequence.substring(0, i);
    if (dictionary.has(left)) {
      if (i === sequence.length) {
        memo[sequence] = true;
        return true;
      }

      const right = sequence.substring(i, sequence.length);
      if (wordBreakUsingMemo(right, dictionary, memo)) {
        memo[sequence] = true;
        return true;
      }
    }
  }

  memo[sequence] = false;
  return false;
}
