function expandedForm(num) {
  let str = String(num);
  let numbers = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "0") {
      numbers.push(str[i].padEnd(str.length - i, 0));
    }
  }

  return numbers.join(" + ");
}

console.log(expandedForm(70304));
console.log(expandedForm(42));
