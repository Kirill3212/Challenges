function moveZeros(arr) {
  let nonZeroes = [];
  let zeroes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) zeroes.push(arr[i]);
    else nonZeroes.push(arr[i]);
  }

  return nonZeroes.concat(zeroes);
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
