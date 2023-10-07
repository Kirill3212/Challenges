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
    default:
      throw new Error("Invalid operator");
  }
};
console.log(calculator(12, 7, "+"));

module.exports = calculator;
