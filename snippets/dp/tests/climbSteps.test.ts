import { climbStepsIteratively, climbStepsRecursively } from '../climbSteps';

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
