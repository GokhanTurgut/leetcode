/*
  With this solution we are always
  keeping our numbers array sorted so
  finding the median value is easy and
  efficient with O(1) time complexity
  but adding numbers to our array is not
  so efficient with O(n) time complexity.
  Heap data structure can be used instead of
  array to optimize it but JavaScript doesn't
  have built in heap data structure so more
  code needed to implement the data structure
  as well to go with that solution.
*/
class MedianFinder {
  constructor() {
    this.numbers = [];
  }

  addNum(num) {
    if (this.numbers.length === 0) {
      this.numbers.push(num);
      return;
    }
    if (this.numbers[0] >= num) {
      this.numbers.unshift(num);
    } else if (this.numbers[this.numbers.length - 1] <= num) {
      this.numbers.push(num);
    } else {
      for (let i = 0; i < this.numbers.length; i++) {
        if (this.numbers[i] > num) {
          this.numbers.splice(i, 0, num);
          return;
        }
      }
    }
  }

  findMedian() {
    const middle = Math.floor(this.numbers.length / 2);
    if (this.numbers.length % 2 === 0) {
      return (this.numbers[middle - 1] + this.numbers[middle]) / 2;
    } else return this.numbers[middle];
  }
}

const finder = new MedianFinder();
finder.addNum(2);
finder.addNum(4);
finder.addNum(6);
finder.addNum(7);
finder.addNum(9);
finder.addNum(3);
finder.addNum(5);
finder.addNum(8);
console.log(finder.numbers);
console.log(finder.findMedian());
