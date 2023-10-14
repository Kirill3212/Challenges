function orderWeight(string) {
  return string
    .split(" ")
    .sort()
    .sort((a, b) => sumOfParts(a) - sumOfParts(b))
    .join(" ");

  function sumOfParts(num) {
    return num.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  }
}

console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
