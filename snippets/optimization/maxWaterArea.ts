/**
 * You are given an array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Note: You may not slant the container.
 *
 * @param heights of vertical lines
 * @returns max container size
 */
const maxWaterArea = (heights: number[]): number => {
  let maxArea = 0;
  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    const leftHeight = heights[l];
    const rightHeight = heights[r];
    const area = Math.min(leftHeight, rightHeight) * (r - l);

    maxArea = Math.max(maxArea, area);

    if (leftHeight < rightHeight) {
      l++;
    } else {
      r--;
    }
  }

  return maxArea;
};

export default maxWaterArea;
