function solution(number) {
  var result = "";
  var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  decimals.forEach((value, index) => {
    while (number >= value) {
      result += roman[index];
      number -= value;
    }
  });

  return result;
}

console.log(solution(2008));
