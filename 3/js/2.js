'use strict';

// Числа

/*
Округление
Одна из часто используемых операций при работе с числами – это округление.

- Math.floor
Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
- Math.ceil
Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
- Math.round
Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.

- isNaN(value) преобразует значение в число и проверяет является ли оно NaN:
alert( isNaN(NaN) ); // true
alert( isNaN("str") ); // true

- isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
alert( isFinite("15") ); // true
alert( isFinite("str") ); // false, потому что специальное значение: NaN
alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity
*/

// Task 1

const sum = () => {
  let question = prompt('', 0);
  return question.split(',').reduce((acc, rec) => acc + +rec, 0);
};

sum();

// Task 2

const random = (a, b) => {
  return Math.random() * (b - a) + a;
};

random(2, 10);

// Task 3

const randomInteger = (a, b) => {
  return Math.floor(Math.random() * (b - a + 1)) + a;
};

randomInteger(2, 5);
