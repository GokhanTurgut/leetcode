/*
  With this solution we are using
  bottom up technique in Dynamic 
  Programming, the last two step
  solutions are one each and from
  last steps we are calculating previous
  steps and at the end of our loop we
  calculate first step through adding
  these current and next values. That
  gives us basically the fibonacci sequence.
*/
function climbStairs(n) {
  let current = 1;
  let next = 1;
  for (let i = 0; i < n - 1; i++) {
    let temp = current;
    current = current + next;
    next = temp;
  }
  return current;
}
