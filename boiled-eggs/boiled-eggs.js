function cookingTime(eggs) {
  let totalMinutes = 0;

  for (let i = eggs; i > 0; i -= 8) {
    totalMinutes += 5;
  }

  return totalMinutes;
}

module.exports = cookingTime;
