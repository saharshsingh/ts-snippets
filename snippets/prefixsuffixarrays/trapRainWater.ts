export default function trap(height: number[]): number {
  const n = height.length;
  let left = height[0];
  let right = height[n - 1];

  let trapped = 0;

  for (let i = 0, j = n - 1; i < j; ) {
    const ceiling = Math.min(left, right);

    if (left <= right) {
      const h = height[++i];
      if (h < left) {
        trapped += ceiling - h;
      } else {
        left = height[i];
      }
    } else {
      const h = height[--j];
      if (h < right) {
        trapped += ceiling - h;
      } else {
        right = height[j];
      }
    }
  }

  return trapped;
}
