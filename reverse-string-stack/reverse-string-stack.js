function reverseStringStack(str) {
  let stack = [];
  let result = "";

  for (let l of str) {
    stack.push(l);
  }

  for (let i = 0; i < str.length; i++) {
    result += stack.pop();
  }

  return result;
}

console.log(reverseStringStack("Howdy"));
console.log(reverseStringStack("Greetings from Earth"));
