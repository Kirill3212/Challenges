function pigIt(str) {
  return str
    .split(" ")
    .map((word) =>
      /\W/.test(word) ? word : word.slice(1) + word.slice(0, 1) + "ay"
    )
    .join(" ");
}

console.log(pigIt("Pig latin is cool !"));
