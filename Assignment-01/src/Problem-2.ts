{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
  // Input: removeDuplicates([1, 2, 2, 3, 4, 4, 5])
  // Output: [1, 2, 3, 4, 5]

  function removeDuplicates(numbers: number[]): number[] {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
  }
  console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4, 4, 5]));
}
