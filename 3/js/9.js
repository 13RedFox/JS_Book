'use strict';

// Object.keys, values, entries

/*
Для простых объектов доступны следующие методы:

- Object.keys(obj) – возвращает массив ключей.
- Object.values(obj) – возвращает массив значений.
- Object.entries(obj) – возвращает массив пар [ключ, значение].
*/

// Task 1

const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const sumSalaries = (obj) => {
  let result = 0;
  for (let prop of Object.values(obj)) {
    if (!prop) {
      return result;
    }
    result += prop;
  }
  return result;
};

sumSalaries(salaries); // 650

// Task 2

const user = {
  name: 'John',
  age: 30,
};

const count = (obj) => Object.keys(obj).length;

count(user); // 2
