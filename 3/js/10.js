'use strict';

// Деструктурирующее присваивание

// Task 1

const user = {
  name: 'John',
  years: 30,
};

const { name, years: age, isAdmin = false } = user;

// Task 2

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalary = (salaries) => {
  let maxSal = 0;
  let maxName = null;

  for (let prop of Object.entries(salaries)) {
    const [name, sum] = prop;
    if (!prop) {
      return null;
    }
    if (sum > maxSal) {
      maxSal = sum;
      maxName = name;
    }
  }
  return maxName;
};

topSalary(salaries); // Pete
