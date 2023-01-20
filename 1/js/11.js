'use strict';

// Логические операторы

// Task 1

let age = 13;
if (age >= 14 || age <= 90) {
  console.log('Подходит');
}

// Task 2

if (age < 14 && age > 90) {
  console.log('Checked');
}

// Task 3

const loginName = prompt('Введите логин', '');

if (loginName === 'Админ') {
  const password = prompt('Введите пароль', '');
  if (password === 'Я главный') {
    console.log('Здравствуйте!');
  } else if (password === null || password === '') {
    console.log('Отмененно');
  } else {
    console.log('Неверный пароль');
  }
} else if (loginName === null || loginName === '') {
  console.log('Отмененно');
} else {
  console.log('Я вас не знаю');
}
