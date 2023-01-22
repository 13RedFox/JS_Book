'use strict';

// Строки

/*
Методы для строки:
- Для получения символа используйте [] или метод at.
- Для получения подстроки используйте slice или substring.
- Для того, чтобы перевести строку в нижний или верхний регистр, используйте toLowerCase/toUpperCase.
- Для поиска подстроки используйте indexOf или includes/startsWith/endsWith, когда надо только проверить, есть ли вхождение.
Чтобы сравнить строки с учётом правил языка, используйте localeCompare.

Строки также имеют ещё кое-какие полезные методы:
- str.trim() — убирает пробелы в начале и конце строки.
*/

// Task 1

const ucFirst = (str) => {
  let firstLeter = '';

  if (typeof str === 'string' && str.length) {
    firstLeter += str[0].toUpperCase();
    return firstLeter + str.slice(1);
  }
  return str;
};

ucFirst('qwerty'); // Qwerty
ucFirst(''); // ''
ucFirst(5); // 5

// Task 2

const checkSpam = (str) => {
  if (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra')) {
    return true;
  }
  return false;
};

checkSpam('buy ViAgRA now'); // true
checkSpam('free xxxxx'); // true
checkSpam('innocent rabbit'); // false

// Task 3

const truncate = (str, length) => {
  let newStr = str;

  if (str.length > length) {
    return newStr.slice(0, length) + '...';
  }
  return newStr;
};

truncate('Вот, что мне хотелось бы сказать на эту тему:', 10); // Вот, что м...
truncate('Всем привет!', 10); // Всем приве...
truncate('Qwerty some text', 15); // Qwerty some tex...

// Task 4

const extractCurrencyValue = (val) => +val.slice(1);

extractCurrencyValue('$120'); // 120
