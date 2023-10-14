function cakes(recipe, available) {
  let arr = Object.keys(recipe);

  let reducedArr = arr.reduce(function (val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    );
  }, Infinity);

  console.log(arr);
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
