'use strict';

// Рекурсия и стек

const company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 },
  ],
  development: {
    sites: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 },
    ],
    internals: [{ name: 'Jack', salary: 1300 }],
  },
};

const sumSalaries = (department) => {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
};

sumSalaries(company); // 6700

// Task 1

const sumTo = (num) => {
  // 1 (Цикл)
  if (num === 1) {
    return num;
  } else {
    let res = 0;
    for (let i = 0; i <= num; i++) {
      res += i;
    }
    return res;
  }

  // 2 (Рекурсия)
  if (num === 1) {
    return num;
  } else {
    let res = num + sumTo(num - 1);
    return res;
  }
};

sumTo(100); // 5050 / 5050

// Task 2

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};

factorial(5); // 120
