function deleteNth(arr, n) {
  let result = [];
  let numOccurences = {};

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (!numOccurences[currentNum]) {
      numOccurences[currentNum] = 1;
      result.push(currentNum);
    } else {
      numOccurences[currentNum]++;

      if (numOccurences[currentNum] <= n) {
        result.push(currentNum);
      }
    }
  }

  return result;
}

console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2));
