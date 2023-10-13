function productFib(prod) {
  let a = 0;
  let b = 1;

  while (a * b < prod) {
    let prevA = a;

    a = b;
    b += prevA;
    console.log(a);
    console.log(b);
  }

  return [a, b, a * b === prod];
}

console.log(productFib(4895));
