const obj = [
  0,
  -1,
  "",
  "0",
  {},
  { x: 0 },
  [],
  [0],
  null,
  undefined,
  () => {},
  () => 0,
];

console.log(obj.filter(Boolean));
