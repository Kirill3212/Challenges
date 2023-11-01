function fn(arr1, arr2) {
  const arr = arr1.concat(arr2);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(fn([1, 2, 2, 3, 4], [2, 3, 3, 4, 5]));
console.log(fn([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
