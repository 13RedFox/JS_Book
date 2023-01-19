'use strict';
// Function

// TASK 1

// Напишите функцию min, которая принимает два аргумента и возвращает их минимум.

const min = (a, b) => (a > b ? b : a);

console.log(min(2, 3));
console.log(min(5, 1));

// TASK 2

/*
  Напишите функцию countBs, которая принимает строку в качестве един­ственного аргумента и возвращает число, показывающее, сколько больших букв ~в~ содержится в этой строке.
*/

const countBs = (str) => {
  return str.split('').reduce((acc, rec) => {
    if (rec === 'B') {
      return (acc += 1);
    }
    return acc;
  }, 0);
};

console.log(countBs('asBsdaBsfdsBsaBa'));
