/*
  Dynamic programming solution where we use the
  bottom-up method to solve the problem where we
  first calculate the coins required for amount 0
  then go up calculating using previous calculations
  to calculate up to amount then we return that result
  if it is not the default array value of infinity.
  O(n*m) time and O(m) space complexity where n is the
  length of coins array and m is the amount we receive.
*/
function coinChange(coins, amount) {
  const cache = Array(amount + 1).fill(Infinity);
  cache[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i - coin > -1) {
        cache[i] = Math.min(cache[i], cache[i - coin] + 1);
      }
    }
  }
  return cache[amount] === Infinity ? -1 : cache[amount];
}

console.log(coinChange([1, 2, 5], 7));
