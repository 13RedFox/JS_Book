'use strict';

// Условное ветвление: if, '?'

// Task 1

const question = prompt('Какое «официальное» название JavaScript?', '');

if (question === 'ECMAScript') {
  console.log('Верно');
} else {
  console.log('Не знаете? ECMAScript!');
}

// Task 2

const number = +prompt('Введите число', 0);

if (number > 0) {
  return 1;
} else if (number < 0) {
  return -1;
} else {
  return 0;
}

// Task 3

const result = a + b < 4 ? 'Мало' : 'Много';

// Task 4

const message =
  login === 'Сотрудник'
    ? 'Привет'
    : login == 'Директор'
    ? 'Здравствуйте'
    : login == ''
    ? 'Нет логина'
    : '';
