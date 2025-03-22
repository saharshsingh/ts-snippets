import {
  longestCommonSubsequenceIteratively,
  longestCommonSubsequenceRecursively,
} from '../longestCommonSubsequence';

describe.each([
  ['using iteration', longestCommonSubsequenceIteratively],
  ['using recursion', longestCommonSubsequenceRecursively],
])('Longest Common Subsequence (%s)', (_, longestCommonSubsequence) => {
  it('should handle the example case correctly', () => {
    expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
  });

  it('should handle identical strings', () => {
    expect(longestCommonSubsequence('abcdef', 'abcdef')).toBe(6);
  });

  it('should handle completely different strings', () => {
    expect(longestCommonSubsequence('abc', 'def')).toBe(0);
  });

  it('should handle empty strings', () => {
    expect(longestCommonSubsequence('', 'abcdef')).toBe(0);
    expect(longestCommonSubsequence('abcdef', '')).toBe(0);
    expect(longestCommonSubsequence('', '')).toBe(0);
  });

  it('should handle strings with one common character', () => {
    expect(longestCommonSubsequence('a', 'a')).toBe(1);
    expect(longestCommonSubsequence('abc', 'b')).toBe(1);
  });

  it('should handle strings where one is a subsequence of the other', () => {
    expect(longestCommonSubsequence('abcdef', 'ace')).toBe(3);
    expect(longestCommonSubsequence('abc', 'abcdef')).toBe(3);
  });

  it('should handle strings with multiple possible LCS of same length', () => {
    // For "abcde" and "aec", both "ae" and "ac" are valid LCS
    expect(longestCommonSubsequence('abcde', 'aec')).toBe(2);
  });

  it('should handle longer, more complex strings', () => {
    expect(
      longestCommonSubsequence(
        'aaaaaacaaaaacccaaaaaaaaaaacaaaaaaaaacaaaaacccaaaaaaaaaaacaaa',
        'bcbcbcbcbcbcbcbcbcbcbcbc'
      )
    ).toBe(10);
  });

  it('should handle repeated characters', () => {
    expect(longestCommonSubsequence('aaaaa', 'aaa')).toBe(3);
    expect(longestCommonSubsequence('aabaa', 'aaaa')).toBe(4);
  });

  it('should handle case-sensitive matching', () => {
    expect(longestCommonSubsequence('AbcdE', 'aBcDe')).toBe(1); // only 'c' matches
  });

  it('should handle strings with characters in different order', () => {
    expect(longestCommonSubsequence('abcdef', 'fedcba')).toBe(1);
  });
});
