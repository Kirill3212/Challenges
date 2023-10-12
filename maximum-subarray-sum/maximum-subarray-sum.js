var maxSequence = function (arr) {
  let maxFound = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;

    if (partialSum < 0) {
      partialSum = 0;
    }

    if (partialSum > maxFound) {
      maxFound = partialSum;
    }
  }

  return maxFound;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
