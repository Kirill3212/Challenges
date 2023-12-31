snail = function (array) {
  let snake = [];

  while (array.length) {
    snake.push(...array.shift());
    array.forEach((item) => snake.push(item.pop()));
    array.reverse().forEach((item) => item.reverse());
  }

  return snake;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

console.log(
  snail([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
  ])
);

// Разбор

// [1, 2, 3, 4, 5],
// [6, 7, 8, 9, 10],
// [11, 12, 13, 14, 15],
// [16, 17, 18, 19, 20],
// [21, 22, 23, 24, 25],

// [1, 2, 3, 4, 5]  (1 шаг - вырезается первый массив)
// [1, 2, 3, 4, 5, 10, 15, 20, 25]  (2 шаг - вырезаются последнии элементы массива)

// [24, 23, 22, 21],
// [19, 18, 17, 16],   // (3 шаг - переварачивание)
// [14, 13, 12, 11],
// [9, 8, 7, 6],

// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21]  (1 шаг - вырезается первый массив)
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6]  (2 шаг - вырезаются последнии элементы массива)

// [7, 8, 9],
// [12, 13, 14],   // (3 шаг - переварачивание)
// [17, 18, 19],

/// ...
