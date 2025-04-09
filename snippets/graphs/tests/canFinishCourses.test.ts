import { checkUsingBFS, checkUsingDFS } from '../canFinishCourses';

describe.each([
  ['using breadth first search', checkUsingBFS],
  ['using depth first search', checkUsingDFS],
])('Course Schedule Problem %s', (_, canFinishCourses) => {
  // Basic examples from the problem statement
  test('Basic example 1: n = 2, prerequisites = [[1,0]]', () => {
    expect(canFinishCourses(2, [[1, 0]])).toBe(true);
  });

  test('Basic example 2: n = 2, prerequisites = [[1,0],[0,1]]', () => {
    expect(
      canFinishCourses(2, [
        [1, 0],
        [0, 1],
      ])
    ).toBe(false);
  });

  // Edge cases
  test('No prerequisites (empty array)', () => {
    expect(canFinishCourses(3, [])).toBe(true);
  });

  test('Single course with no prerequisites', () => {
    expect(canFinishCourses(1, [])).toBe(true);
  });

  // Linear dependency chain
  test('Linear dependency chain that can be completed', () => {
    expect(
      canFinishCourses(4, [
        [1, 0],
        [2, 1],
        [3, 2],
      ])
    ).toBe(true);
  });

  // Multiple independent chains
  test('Multiple independent chains that can be completed', () => {
    expect(
      canFinishCourses(6, [
        [1, 0],
        [2, 1],
        [4, 3],
        [5, 4],
      ])
    ).toBe(true);
  });

  // Complex cases with branching dependencies
  test('Complex dependency tree that can be completed', () => {
    expect(
      canFinishCourses(6, [
        [0, 1],
        [0, 2],
        [1, 3],
        [2, 3],
        [3, 4],
        [4, 5],
      ])
    ).toBe(true);
  });

  // Various cycle scenarios
  test('Self-loop (course depends on itself)', () => {
    expect(
      canFinishCourses(2, [
        [0, 0],
        [1, 0],
      ])
    ).toBe(false);
  });

  test('Longer cycle', () => {
    expect(
      canFinishCourses(4, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 0],
      ])
    ).toBe(false);
  });

  test('Complex graph with a cycle', () => {
    expect(
      canFinishCourses(6, [
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4],
        [4, 2],
        [5, 0],
      ])
    ).toBe(false);
  });

  test('Complex graph with multiple cycles', () => {
    expect(
      canFinishCourses(7, [
        [0, 1],
        [1, 0],
        [2, 3],
        [3, 4],
        [4, 2],
        [5, 6],
        [6, 5],
      ])
    ).toBe(false);
  });

  // Disconnected components
  test('Graph with disconnected components, all can be completed', () => {
    expect(
      canFinishCourses(6, [
        [0, 1],
        [2, 3],
        [4, 5],
      ])
    ).toBe(true);
  });

  test('Graph with disconnected components, one contains a cycle', () => {
    expect(
      canFinishCourses(6, [
        [0, 1],
        [2, 3],
        [3, 2],
        [4, 5],
      ])
    ).toBe(false);
  });

  // Common edge cases
  test('All courses have prerequisites but no cycles', () => {
    const prereqs: Array<[number, number]> = [];
    for (let i = 0; i < 9; i++) {
      prereqs.push([i + 1, i]);
    }
    expect(canFinishCourses(10, prereqs)).toBe(true);
  });

  test('Course depends on multiple prerequisites', () => {
    expect(
      canFinishCourses(5, [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
      ])
    ).toBe(true);
  });

  // Performance test for larger input
  test('Performance test with large number of courses and prerequisites', () => {
    const n = 1000;
    const prereqs: Array<[number, number]> = [];
    // Create a long chain of prerequisites: 999 depends on 998, 998 depends on 997, etc.
    for (let i = 1; i < n; i++) {
      prereqs.push([i, i - 1]);
    }
    expect(canFinishCourses(n, prereqs)).toBe(true);
  });

  // Special case with no edges
  test('No edges in the graph', () => {
    expect(canFinishCourses(5, [])).toBe(true);
  });

  // Course with multiple dependencies
  test('Course with multiple prerequisites forming a diamond pattern', () => {
    expect(
      canFinishCourses(5, [
        [4, 0],
        [4, 1],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 2],
        [4, 3],
      ])
    ).toBe(true);
  });
});
