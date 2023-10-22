function inArray(array1, array2) {
  let result = [];

  array1.forEach((word) => {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].match(word)) {
        if (!result.includes(word)) result.push(word);
      }
    }
  });

  return result.sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
console.log(
  inArray(
    ["tarp", "mice", "bull"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
