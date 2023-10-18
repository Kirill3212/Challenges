function countSmileys(arr) {
  let count = 0;
  let regExpr = /[;:][~-]?[)D]/;
  arr.forEach((smile) => {
    if (smile.match(regExpr)) count++;
  });

  return arr.length ? count : 0;
}

console.log(countSmileys([":)", ";(", ";}", ":-D"]));
