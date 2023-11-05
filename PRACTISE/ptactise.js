function fn(s) {
  for (let l of s) {
    console.log(l.charCodeAt(0) - 96);
  }
}

const str1 = "strength";
const str2 = "strength";
const str3 = "strength";

console.log(fn(str1));
console.log(str2.charCodeAt(3));
