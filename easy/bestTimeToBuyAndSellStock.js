/*
  We start from the start of the prices array
  and have min variable that tracks the minimum
  price that we can buy the stock at. We also have
  a maxProfit variable to keep track of the maximum
  profit that we can make and after the loop has been
  completed we return that value. O(n) time complexity
  and O(1) space complexity.
*/
function maxProfit(prices) {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (min < prices[i]) {
      maxProfit = Math.max(maxProfit, prices[i] - min);
    } else {
      min = prices[i];
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
