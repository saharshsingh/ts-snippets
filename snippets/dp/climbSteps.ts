export function climbStepsIteratively (n: number): number {
    const numOfWays: number[] = new Array<number>(n+1);

    numOfWays[1] = 1;
    numOfWays[2] = 2;
    for (let i = 3; i <= n; i++) {
        numOfWays[i] = numOfWays[i-1] + numOfWays[i-2];
    }

    return numOfWays[n];
};

export function climbStepsRecursively (n: number): number {
    return climbStepsUsingMemo(n);
};

export function climbStepsUsingMemo (
    n: number, memo?: Record<number, number>
): number {
    if (!memo) {
        memo = {};
    }

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
};

/**
 * You are climbing a staircase with n steps. You can take either 1 or 2 steps at a time.
 * In how many distinct ways can you climb to the top?
 */
const climbSteps = climbStepsIteratively;
export default climbSteps;
