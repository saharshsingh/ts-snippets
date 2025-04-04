import { wordBreakIteratively, wordBreakRecursively } from '../wordBreak';

describe.each([
  ['using iteration', wordBreakIteratively],
  ['using recursion', wordBreakRecursively],
])('Word Break Problem %s', (_, wordBreak) => {
  // Basic examples from the problem statement
  test('Basic example 1: "leetcode" with ["leet", "code"]', () => {
    expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
  });

  test('Basic example 2: "applepenapple" with ["apple", "pen"]', () => {
    expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
  });

  test('Basic example 3: "catsandog" with ["cats", "dog", "sand", "and", "cat"]', () => {
    expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
  });

  // Edge cases
  test('Empty string should return true with any dictionary', () => {
    expect(wordBreak('', ['a', 'b', 'c'])).toBe(true);
  });

  test('Empty dictionary should return false for non-empty string', () => {
    expect(wordBreak('abc', [])).toBe(false);
  });

  test('Empty string with empty dictionary should return true', () => {
    expect(wordBreak('', [])).toBe(true);
  });

  // Single character tests
  test('Single character string that matches dictionary', () => {
    expect(wordBreak('a', ['a', 'b'])).toBe(true);
  });

  test('Single character string that does not match dictionary', () => {
    expect(wordBreak('a', ['b', 'c'])).toBe(false);
  });

  // Multiple ways to segment
  test('String with multiple valid segmentations', () => {
    expect(wordBreak('abcd', ['a', 'abc', 'd', 'abcd', 'bc'])).toBe(true);
  });

  // Overlapping words
  test('String with overlapping word possibilities', () => {
    expect(wordBreak('aaa', ['a', 'aa'])).toBe(true);
  });

  test('String with overlapping word possibilities 2', () => {
    expect(wordBreak('aaaaaaa', ['a', 'aa', 'aaa'])).toBe(true);
  });

  // Longer strings
  test('Longer string that should return true', () => {
    expect(wordBreak('pineapplepenapple', ['apple', 'pen', 'pine', 'pineapple'])).toBe(true);
  });

  test('Longer string that should return false', () => {
    expect(wordBreak('impossibletosegment', ['possible', 'segment', 'to'])).toBe(false);
  });

  // Case sensitivity
  test('Case sensitivity test', () => {
    expect(wordBreak('Code', ['code'])).toBe(false);
  });

  // Repeating patterns
  test('Repeating pattern test', () => {
    expect(wordBreak('abababab', ['ab', 'aba', 'ba'])).toBe(true);
  });

  // Performance test for potential optimizations
  test('Performance test with long string and dictionary', () => {
    const longString = 'a'.repeat(100);
    const dictionary = ['a', 'aa', 'aaa', 'aaaa'];
    expect(wordBreak(longString, dictionary)).toBe(true);
  });

  // Additional test case for tricky segmentation
  test('Tricky segmentation that requires backtracking', () => {
    expect(wordBreak('aaaaaab', ['a', 'aa', 'aaa', 'aaaa'])).toBe(false);
  });

  // Test with non-alphabetic characters
  test('String with special characters', () => {
    expect(wordBreak('hello123world', ['hello', '123', 'world'])).toBe(true);
  });

  test('String with special characters that cannot be segmented', () => {
    expect(wordBreak('hello123world', ['hello', 'world'])).toBe(false);
  });
});
