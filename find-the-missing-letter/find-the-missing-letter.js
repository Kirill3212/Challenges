function findMissingLetter(array) {
  alphabet = "abcdefghijklmnopqrstuvwxyz";

  let defineUpperLowerCase =
    array[0] === array[0].toUpperCase() ? "Upper" : "Lower";

  let regExpStart = new RegExp(`${array[0]}`, "i");
  let regExpEnd = new RegExp(`${array[array.length - 1]}`, "i");

  let firstIndex = alphabet.match(regExpStart).index;
  let lastIndex = alphabet.match(regExpEnd).index;

  const alphabetShort = alphabet.slice(firstIndex, lastIndex + 1);
  let result = array.join("").toLowerCase();

  for (let i = 0; i < alphabetShort.length; i++) {
    if (alphabetShort[i] !== result[i]) {
      return defineUpperLowerCase == "Upper"
        ? alphabetShort[i].toUpperCase()
        : alphabetShort[i];
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
