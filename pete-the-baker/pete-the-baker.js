function cakes(recipe, available) {
  let maxCakes;

  for (var ingredient in recipe) {
    if (available[ingredient]) {
      const possibleCakes = Math.floor(
        available[ingredient] / recipe[ingredient] || 0
      );

      if (!maxCakes || possibleCakes < maxCakes) {
        maxCakes = possibleCakes;
      }
    } else {
      return 0;
    }
  }

  return maxCakes;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
