function validBraces(braces) {
  const stack = [];
  const pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < braces.length; i++) {
    const brace = braces[i];
    if (pairs[brace]) {
      stack.push(brace);
    } else {
      const last = stack.pop();
      if (pairs[last] !== brace) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validBraces("(){}[]{[()]}"));
