function practise(arr) {
  for (let i = 0; i < arr.length; i++) {
    let leftSide = arr.slice(0, i);
    let rightSide = arr.slice(i + 1);

    let leftSum = leftSide.reduce((acc, n) => acc + n, 0);
    let rightSum = rightSide.reduce((acc, n) => acc + n, 0);

    console.log(leftSide, rightSide);
    console.log(leftSum, rightSum);

    if (rightSum === leftSum) {
      return i;
    }
  }
  return -1;
}

console.log(practise([1, 2, 3, 4, 3, 2, 1]));
