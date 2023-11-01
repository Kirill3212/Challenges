const x = 0;

const obj = { x: 10 };

function foo() {
  const obj2 = { x: 20 };

  const f = () => console.log(this.x); // 10

  f.x = 30;

  return f;
}

foo.x = 40;

const bar = foo.call(obj, { x: 50 });
// console.log(bar.x);

bar.x = 60;
// console.log(bar.x);

bar({ x: 70 });
bar.call({ x: 80 }, { x: 90 }, { x: 100 });
