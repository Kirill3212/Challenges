function generateHashtag(str) {
  if (str.trim().length === 0) return false;

  let arr = str.split(" ");
  let result =
    "#" +
    arr
      .map((word) =>
        word.length > 0 ? word[0].toUpperCase() + word.slice(1) : word
      )
      .join("");

  if (result.length > 140 || result.length === 0) return false;

  return result;
}
