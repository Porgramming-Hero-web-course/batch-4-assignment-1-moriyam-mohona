{
  // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
  //Input: sumArray([1, 2, 3, 4, 5]);
  //Output: 15

  function sumArray(numbers: number[]): number {
    let sum = 0;
    numbers.forEach((num) => (sum += num));
    return sum;
  }
  console.log(sumArray([1, 2, 3, 4, 5]));
}
