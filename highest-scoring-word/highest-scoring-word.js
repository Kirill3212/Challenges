function high(x) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  let arr = x.split(" ");
  let scoreArr = [];

  arr.forEach((word) => {
    scoreWord(word);
  });

  function scoreWord(word) {
    let score = 0;

    for (let i = 0; i < word.length; i++) {
      score += alphabet.indexOf(word[i]) + 1;
    }

    scoreArr.push(score);
  }

  let maxScore = Math.max(...scoreArr);
  let indexOfMaxScore = scoreArr.indexOf(maxScore);
  return arr[indexOfMaxScore];
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
