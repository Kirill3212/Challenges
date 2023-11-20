function isPrime(num) {
  if (num % 2 == 0) return false;
  for (var i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i == 0) return false;
  }
  return true;
}
function findEmirp(n) {
  var ans = [],
    st = 13,
    rev,
    sm = 0,
    cnt = 0;
  for (var i = st; i <= n; i += 2) {
    if (isPrime(i)) {
      rev = +i.toString().split("").reverse().join("");
      if (rev !== i && isPrime(rev)) {
        ans.push(i);
        sm += i;
        cnt++;
      }
    }
  }
  return [cnt, ans[cnt - 1], sm];
}
