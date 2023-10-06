const calculator = (n1, n2, operator) => {
  switch (operator) {
    case "-":
      return n1 - n2;
    case "+":
      return n1 + n2;
    case "/":
      return n1 / n2;
    case "*":
      return n1 * n2;
  }
};
console.log(calculator(2, 51, "-"));

module.exports = calculator;
