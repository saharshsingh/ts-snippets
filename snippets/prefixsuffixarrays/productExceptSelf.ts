const multiply = (a: number, b: number): number => a * b || 0;

export default function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;

  let leftProduct = 1;
  const result = nums.map((num) => {
    const resultInit = leftProduct;
    leftProduct = multiply(leftProduct, num);
    return resultInit;
  });

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] = multiply(result[i], rightProduct);
    rightProduct = multiply(rightProduct, nums[i]);
  }

  return result;
}
