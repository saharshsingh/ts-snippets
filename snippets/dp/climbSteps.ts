/**
 * You are climbing a staircase with n steps. You can take either 1 or 2 steps at a time.
 * In how many distinct ways can you climb to the top?
 */
const climbSteps = climbStepsIteratively;
export default climbSteps;

export function climbStepsIteratively(n: number): number {
  if (n <= 1) {
    return 1;
  }
  let prev = 1;
  let current = 2;
  for (let i = 3; i <= n; i++) {
    const next = current + prev;
    prev = current;
    current = next;
  }
  return current;
}

export function climbStepsRecursively(n: number): number {
  return climbStepsUsingMemo(n);
}

function climbStepsUsingMemo(n: number, memo: Record<number, number> = {}): number {
  // Check if the result is already computed
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Base cases
  if (n <= 2) {
    memo[n] = n;
    return n;
  }

  const prev = climbStepsUsingMemo(n - 1, memo);
  const prevPrev = climbStepsUsingMemo(n - 2, memo);
  const result = prev + prevPrev;
  memo[n] = result;
  return result;
}
