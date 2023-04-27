const words = [
  "sunshine",
  "babe",
  "beutiful",
  "world",
  "gorgous",
  "Darling",
  "Ray of Sunshine",
];
function getRandomWord(firstLetterToUppercase = false) {
  const word = words[randomNumber(0, words.length - 1)];
  return firstLetterToUppercase
    ? word.charAt(0).toUpperCase() + word.slice(1)
    : word;
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default getRandomWord;
