multiplicationTable = function (size) {
  let result = [];

  for (let i = 1; i <= size; i++) {
    let arr = [];

    for (let j = 1; j <= size; j++) {
      arr.push(j * i);
    }

    result.push(arr);
  }

  return result;
};

console.log(multiplicationTable(3));
