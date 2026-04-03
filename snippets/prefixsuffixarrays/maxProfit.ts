export default function maxProfit(prices: number[]): number {
  let max = 0;
  let minBuyPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    minBuyPrice = i === 0 ? prices[i] : Math.min(prices[i - 1], minBuyPrice);
    max = Math.max(max, prices[i] - minBuyPrice);
  }
  return max;
}
