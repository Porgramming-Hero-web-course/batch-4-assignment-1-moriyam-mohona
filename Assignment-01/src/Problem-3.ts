{
  // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
  // Input:countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript");
  //  Output:2;

  function countWordOccurrences(sentence: string, word: string): number {
    return sentence.toLowerCase().split(word.toLowerCase()).length - 1;
  }

  console.log(
    countWordOccurrences(
      "TypeScript is great. I love TypeScript!",
      "typescript"
    )
  );
}
