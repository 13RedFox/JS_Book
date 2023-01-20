'use strict';

// Объекты

/*
Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

Чтобы получить доступ к свойству, мы можем использовать:
  Запись через точку: obj.property.
  Квадратные скобки obj["property"]. Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].

Дополнительные операторы:
  Удаление свойства: delete obj.prop.
  Проверка существования свойства: "key" in obj.
  Перебор свойств объекта: цикл for => for (let key in obj).
*/

// Task 1

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Task 2

const schedule = {};

const isEmpty = (obj) => {
  for (let prop in obj) {
    return false;
  }
  return true;
};

console.log(isEmpty(schedule)); // true
schedule.name = 'Alex';
console.log(isEmpty(schedule)); // false

// Task 3

const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

const sum = (obj) => {
  let result = 0;
  for (let prop in obj) {
    result += obj[prop];
  }
  return result;
};

console.log(sum(salaries)); // 390

// Task 4

const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

console.log(menu); // { width: 200, height: 300, title: 'My menu' }

const multiplyNumeric = (obj) => {
  for (const prop in obj) {
    if (typeof obj[prop] === 'number') {
      obj[prop] *= 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu); // { width: 400, height: 600, title: 'My menu' }
