function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (min < prices[i]) {
      if (maxProfit < (prices[i] - min)) {
        maxProfit = prices[i] - min;
      }
    } else {
      min = prices[i];
    }
  }
  return maxProfit;
}