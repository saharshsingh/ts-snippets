import { climbStepsIteratively, climbStepsRecursively, climbStepsUsingMemo } from '../climbSteps';

describe.each([
  ['climbStepsIteratively', climbStepsIteratively],
  ['climbStepsRecursively', climbStepsRecursively],
])('%s', (_, climbSteps) => {
  test('should return 1 for n = 1', () => {
    expect(climbSteps(1)).toBe(1);
  });

  test('should return 2 for n = 2', () => {
    expect(climbSteps(2)).toBe(2);
  });

  test('should return 3 for n = 3', () => {
    expect(climbSteps(3)).toBe(3);
  });

  test('should return 5 for n = 4', () => {
    expect(climbSteps(4)).toBe(5);
  });

  test('should return 8 for n = 5', () => {
    expect(climbSteps(5)).toBe(8);
  });
});

describe('climbStepsUsingMemo', () => {
  test('should return 1 for n = 1 with memoization', () => {
    const memo: Record<number, number> = {};
    const result = climbStepsUsingMemo(1, memo);
    expect(result).toBe(1);
    expect(memo[1]).toBe(1);
  });

  test('should return 2 for n = 2 with memoization', () => {
    const memo: Record<number, number> = {};
    const result = climbStepsUsingMemo(2, memo);
    expect(result).toBe(2);
    expect(memo[2]).toBe(2);
  });

  test('should return correct values for larger n with memoization', () => {
    const memo: { [key: number]: number } = {};
    const result = climbStepsUsingMemo(5, memo);
    expect(result).toBe(8);
    expect(memo[3]).toBe(3);
    expect(memo[4]).toBe(5);
    expect(memo[5]).toBe(8);
  });

  test('should use existing memoized values to optimize calculation', () => {
    let memo: { [key: number]: number } = { 3: 2, 4: 3 };
    const result = climbStepsUsingMemo(5, memo);
    expect(result).toBe(5);
    expect(memo[5]).toBe(5);
  });
});
