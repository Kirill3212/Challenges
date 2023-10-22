function count(string) {
  if (string.length) {
    let str = {};

    for (let i = 0; i < string.length; i++) {
      if (str[string[i]]) {
        str[string[i]]++;
      } else str[string[i]] = 1;
    }

    return str;
  } else return {};
}

console.log(count(""));
