function tribonacciSequence(signature, n) {
  for (var i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }
  return signature.slice(0, n);
}

console.log(tribonacciSequence([0, 13, 4], 1));
