function toWeirdCase(string) {
  let arr = string.split(" ");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) result.push(" ");
    for (let j = 0; j < arr[i].length; j++) {
      if (j % 2 == 0) {
        result.push(arr[i][j].toUpperCase());
      } else result.push(arr[i][j].toLowerCase());
    }
  }

  return result.join("");
}

console.log(toWeirdCase("Weird string case"));
