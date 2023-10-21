function longestConsec(strarr, k) {
  var longest = "";

  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempStr = strarr.slice(i, i + k).join("");

    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }

  return longest;
}

console.log(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  )
);
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
