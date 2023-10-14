function firstNonRepeatingLetter(s) {
  let nonRepetetive = [];

  let lowerS = s.toLowerCase();

  for (let el of lowerS) {
    if (lowerS.indexOf(el) == lowerS.lastIndexOf(el)) {
      nonRepetetive.push(s.charAt(lowerS.indexOf(el)));
    }
  }

  return nonRepetetive.length > 0 ? nonRepetetive[0] : "";
}

console.log(firstNonRepeatingLetter("stress"));
