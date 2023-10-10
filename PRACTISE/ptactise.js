function practise(n) {
  let factorial = 1;

  for (let i = n; i >= 1; i--) {
    factorial *= i;
  }

  return factorial;
}

console.log(practise(8));
console.log(practise(0));
console.log(practise(1));
