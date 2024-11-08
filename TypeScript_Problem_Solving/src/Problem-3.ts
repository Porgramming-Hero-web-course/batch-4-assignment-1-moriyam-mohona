{
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.
  // Input: "I love typescript", "typescript"
  // Output: 1;

  function countWordOccurrences(sentence: string, word: string): number {
    return sentence
      .toLowerCase()
      .split(" ")
      .filter((w) => w === word.toLowerCase()).length;
  }
  console.log(countWordOccurrences("I love typescript", "typescript"));
}
