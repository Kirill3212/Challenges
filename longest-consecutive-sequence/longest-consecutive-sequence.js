function fn(nums) {
  const numSet = new Set(nums);
  let longestSequence = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSequence = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentSequence++;
      }

      longestSequence = Math.max(longestSequence, currentSequence);
    }
  }

  return longestSequence;
}

console.log(fn([100, 4, 4, 4, 200, 1, 3, 2]));
console.log(fn([0, 3, 7, 2, 5, 8, 4, 6, 9, 1]));
console.log(fn([]));
