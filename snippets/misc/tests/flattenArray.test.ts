import { flattenArrayRecursively, flattenArrayIteratively } from '../flattenArray';

// Test both implementations with the same test cases
describe.each([
  ['flattenArrayRecursively', flattenArrayRecursively],
  ['flattenArrayIteratively', flattenArrayIteratively],
])('%s', (_, flattenArray) => {
  test('should return an empty array when given an empty array', () => {
    expect(flattenArray([])).toEqual([]);
  });

  test('should return the same array when given a flat array', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('should flatten a simple nested array', () => {
    expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });

  test('should flatten deeply nested arrays', () => {
    expect(flattenArray([1, [2, [3, [4, 5]], 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should handle arrays with mixed data types', () => {
    type MixedType = string | number | boolean | null | undefined;
    expect(flattenArray<MixedType>(['a', [1, true], [null, undefined]])).toEqual([
      'a',
      1,
      true,
      null,
      undefined,
    ]);
  });

  test('should handle arrays with empty arrays', () => {
    expect(flattenArray([1, [], 2, [3, [], 4]])).toEqual([1, 2, 3, 4]);
  });

  test('should handle complex nested structure', () => {
    const input = [1, [2, 3], [4, [5, 6]], [[[7, 8], 9], 10], 11];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    expect(flattenArray(input)).toEqual(expected);
  });

  test('should maintain order of elements', () => {
    const letters = ['a', ['b', ['c', 'd']], 'e', ['f']];
    expect(flattenArray<string>(letters)).toEqual(['a', 'b', 'c', 'd', 'e', 'f']);
  });

  test('should correctly handle type parameters', () => {
    // This test is more for TypeScript compilation than runtime behavior
    const numbers: number[] = flattenArray<number>([1, [2, [3]]]);
    expect(numbers).toEqual([1, 2, 3]);

    const strings: string[] = flattenArray<string>([['a'], 'b', [['c']]]);
    expect(strings).toEqual(['a', 'b', 'c']);
  });

  // Add a test for very deeply nested arrays to check for stack overflow
  test('should handle very deeply nested arrays', () => {
    // Create a deeply nested array with 1000 levels
    type NestedNumber = Array<number | NestedNumber>;
    let deepArray: NestedNumber = [42];
    for (let i = 0; i < 999; i++) {
      deepArray = [deepArray];
    }

    const result = flattenArray(deepArray);
    expect(result).toEqual([42]);
  });
});

// Add comparison tests to verify both implementations produce identical results
describe('Implementation comparison', () => {
  test('both implementations should produce identical results for complex inputs', () => {
    const complexInput = [1, [2, [3, 4], 5], [6, [7, [8, 9]]], 10];

    const recursiveResult = flattenArrayRecursively(complexInput);
    const iterativeResult = flattenArrayIteratively(complexInput);

    expect(iterativeResult).toEqual(recursiveResult);
  });

  test('both implementations should handle mixed types identically', () => {
    type MixedType = string | number | boolean | null | undefined;
    const mixedInput = ['a', [1, [true, [null]]], undefined];

    const recursiveResult = flattenArrayRecursively<MixedType>(mixedInput);
    const iterativeResult = flattenArrayIteratively<MixedType>(mixedInput);

    expect(iterativeResult).toEqual(recursiveResult);
  });
});
