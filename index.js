// 1. Find the longest word
const words = ["apple", "banana", "kiwi", "orange", "grape"];
const longestWord = words.reduce(
  (longest, word) => (word.length > longest.length ? word : longest),
  ""
);
console.log(longestWord);

// 2. Find the minimum number
const numbers = [10, 5, 8, 20, 15];
const minNumber = numbers.reduce(
  (min, num) => (num < min ? num : min),
  numbers[0]
);
console.log(minNumber);

// 3. Find the total length of all strings
const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"];
const totalLength = wordsLength.reduce((sum, word) => sum + word.length, 0);
console.log(totalLength);

// 4. Count the number of even numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenCount = nums.reduce(
  (count, num) => (num % 2 === 0 ? count + 1 : count),
  0
);
console.log(evenCount);

// 5. Capitalize the first letter of each word and concatenate them
const wordsCaps = ["hello", "world", "how", "are", "you"];
const capitalizedSentence = wordsCaps.reduce(
  (sentence, word) =>
    sentence +
    (sentence ? " " : "") +
    word.charAt(0).toUpperCase() +
    word.slice(1),
  ""
);
console.log(capitalizedSentence);

// 6. Calculate the average of the numbers
const numsAvg = [10, 15, 20, 25, 30];
const average = numsAvg.reduce((sum, num, _, arr) => sum + num / arr.length, 0);
console.log(average);

// 7. Find the sum of squares of each number
const numbersSquared = [1, 2, 3, 4, 5];
const sumOfSquares = numbersSquared.reduce((sum, num) => sum + num * num, 0);
console.log(sumOfSquares);

// 8. Create an object with occurrences of words
const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
];
const wordCount = stationeryWords.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCount);

// 9. Create an object with occurrences of words using first letter
const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"];
const letterCount = wordsLetter.reduce((acc, word) => {
  const firstLetter = word[0].toLowerCase();
  acc[firstLetter] = (acc[firstLetter] || 0) + 1;
  return acc;
}, {});
console.log(letterCount);

// 10. Find the product of positive numbers
const numPositive = [-2, 3, 4, -5, 6];
const productOfPositives = numPositive.reduce(
  (product, num) => (num > 0 ? product * num : product),
  1
);
console.log(productOfPositives);
